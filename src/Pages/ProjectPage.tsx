// ProjectPage.tsx
import { useParams } from 'react-router-dom';
import Project from './Project.tsx';
import projects from './description.json'; // Import your JSON data

function ProjectPage() {
  const { projectName } = useParams<{ projectName: string }>();
  const project = projects.find(p => p['folder name'] === projectName);

  if (!project) return <div>Project not found.</div>;

  // Dynamically import images from the public directory

  const imageModules = import.meta.glob('../../public/Photos/**/*.{JPG,jpg,jpeg,png,gif,webp,avif}', { eager: true });
    // Filter images for the current project

  const images = Object.entries(imageModules)
    .filter(([path]) => path.includes(`/${projectName}/`))
    .map(([path]) => {
      // Replace the public path prefix with the correct URL
      return path.replace('../../public/', '');
    });

  console.log(images)
  console.log(imageModules)

    return (
    <Project
      title={project['folder name']}
      text={project.description}
      download={`Photos/${projectName}/${projectName}.zip`}
      layout={project.layout}
      Content={images}
    />
  );
}

export default ProjectPage;
