const fs = require('fs');
const path = require('path');

// Define the public directory and the output directory
const publicDir = path.resolve(__dirname, 'public', 'Photos');  // Adjust path as needed
const outputDir = path.resolve(__dirname, 'src', 'Pages', 'Photography');  // Where you want to save the generated tsx files
console.log(publicDir);

// Function to get all image files from a folder
function getPhotoFiles(folderName) {
    const folderPath = path.join(publicDir, folderName); // Combine base path with folder name
    return fs.readdirSync(folderPath)
        .filter(file => /\.(jpg|jpeg|png|gif|webp)$/.test(file))
        .map(file => `Photos/${folderName}/${file}`); // Return public-facing paths
}

// Function to generate the tsx file content
function generateTsxFile(folder) {
    const folderPath = path.join(publicDir, folder);
    if (!fs.existsSync(folderPath)) {
        console.error(`Folder does not exist: ${folderPath}`);
        return;
    }

    const files = getPhotoFiles(folder);

    // Read the description from description.txt
    const descriptionPath = path.join(folderPath, 'description.txt');
    let description = `Description for ${folder}`;
    if (fs.existsSync(descriptionPath)) {
        description = fs.readFileSync(descriptionPath, 'utf-8').trim(); // Read and trim whitespace
    } else {
        console.warn(`No description.txt found for ${folder}. Using default description.`);
    }

    const tsxContent = `
import Project from "../Project";

const ${folder.replace(/\s+/g, '')}Pages = {
  title: "${folder}",
  text: ${JSON.stringify(description)}, // Use the description here
  download: "Photos/${folder}/${folder}.zip",
  layout: "ZineScrolling",
  Content: ${JSON.stringify(files, null, 2)},
};

function ${folder.replace(/\s+/g, '')}() {
  return <Project {...${folder.replace(/\s+/g, '')}Pages} />;
}

export default ${folder.replace(/\s+/g, '')};
`;

    const filePath = path.join(outputDir, `${folder}.tsx`);
    fs.writeFileSync(filePath, tsxContent, 'utf-8');
    console.log(`Generated: ${filePath}`);
}

// Generate the photogroups array dynamically
function generatePhotogroups() {
    const photogroups = [];
    fs.readdirSync(publicDir, { withFileTypes: true })
        .filter(entry => entry.isDirectory()) // Only consider directories
        .forEach(folder => {
            const folderName = folder.name;
            photogroups.push({
                title: folderName,
                content: `Photos/${folderName}.webp`, // Create the thumbnail path
                categories: [folderName], // Just for now, we can later add more category logic
            });
        });

    // Write the photogroups array to a separate file for use in Photography.tsx
    const photogroupsPath = path.resolve(__dirname, 'src', 'Pages', 'Photography', 'photogroups.js');
    const photogroupsContent = `const photogroups = ${JSON.stringify(photogroups, null, 2)};\n\nexport default photogroups;`;
    fs.writeFileSync(photogroupsPath, photogroupsContent, 'utf-8');
    console.log(`Generated photogroups.js at: ${photogroupsPath}`);
}

// Call the functions to generate tsx files and photogroups array
fs.readdirSync(publicDir, { withFileTypes: true })
    .filter(entry => entry.isDirectory())
    .forEach(folder => generateTsxFile(folder.name));

// Generate the photogroups.js file
generatePhotogroups();

console.log("Thumbnail generation and tsx file creation complete!");

