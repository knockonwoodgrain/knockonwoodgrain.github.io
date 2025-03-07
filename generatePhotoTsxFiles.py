import os
import json

# Define paths
public_dir = os.path.join(os.getcwd(), 'public', 'Photos')  # Path to the Photos folder
output_dir = os.path.join(os.getcwd(), 'src', 'Pages', 'Photography')  # Path to output TSX files
os.makedirs(output_dir, exist_ok=True)

# Function to load descriptions and categories from description.js
def load_descriptions():
    description_file = os.path.join(public_dir, 'metadata.json')  # Use .json file
    if not os.path.exists(description_file):
        print("metadata.json not found in Photos folder.")
        return {}

    try:
        with open(description_file, 'r', encoding='utf-8') as f:
            return json.load(f)
    except Exception as e:
        print(f"Error reading metadata.json: {e}")
        return {}

# Function to get all image files from a folder
def get_photo_files(folder_name):
    folder_path = os.path.join(public_dir, folder_name)
    return [
        f"Photos/{folder_name}/{file}" for file in os.listdir(folder_path)
        if file.lower().endswith(('.jpg', '.jpeg', '.png', '.gif', '.webp', '.avif'))
    ]

# Function to generate a TSX file for a folder
def generate_tsx_file(folder, descriptions):
    folder_path = os.path.join(public_dir, folder)
    if not os.path.exists(folder_path):
        print(f"Folder does not exist: {folder_path}")
        return

    files = get_photo_files(folder)

    # Get description and categories from descriptions
    folder_data = next((item for item in descriptions if item['folder name'] == folder), None)
    description = folder_data.get('description', f"Description for {folder}") if folder_data else f"Description for {folder}"
    category = folder_data.get('category', folder) if folder_data else folder

    # Create TSX content
    folder_safe_name = folder.replace(' ', '')  # Remove spaces for variable names
    tsx_content = f"""
import Project from "../Project";

const {folder_safe_name}Pages = {{
  title: "{folder}",
  text: {json.dumps(description)}, // Use the description here
  download: "Photos/{folder}/{folder}.zip",
  layout: "ZineScrolling",
  Content: {json.dumps(files, indent=2)},
}};

function {folder_safe_name}() {{
  return <Project {{...{folder_safe_name}Pages}} />;
}}

export default {folder_safe_name};
"""

    # Write the TSX file
    file_path = os.path.join(output_dir, f"{folder}.tsx")
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(tsx_content)
    print(f"Generated: {file_path}")

# Function to find a thumbnail with any supported format
def find_thumbnail(folder_name):
    thumbnail_candidates = [
        f"{folder_name}.jpg", f"{folder_name}.jpeg", f"{folder_name}.png",
        f"{folder_name}.webp", f"{folder_name}.gif", f"{folder_name}.avif",
    ]
    for file in thumbnail_candidates:
        thumbnail_path = os.path.join(public_dir, file)
        if os.path.exists(thumbnail_path):
            return f"Photos/{file}"
    return None

# Function to generate the photogroups.js file
def generate_photogroups(descriptions):
    photogroups = []
    for folder in os.listdir(public_dir):
        folder_path = os.path.join(public_dir, folder)
        if os.path.isdir(folder_path):
            thumbnail = find_thumbnail(folder)
            if thumbnail:
                folder_data = next((item for item in descriptions if item['folder name'] == folder), None)
                category = folder_data.get('category', folder) if folder_data else folder
                photogroups.append({
                    "title": folder,
                    "content": thumbnail,
                    "categories": [category],
                })

    # Write the photogroups.js file
    photogroups_path = os.path.join(output_dir, 'photogroups.json')
    photogroups_content = f"{json.dumps(photogroups, indent=2)}"
    with open(photogroups_path, 'w', encoding='utf-8') as f:
        f.write(photogroups_content)
    print(f"Generated photogroups.json at: {photogroups_path}")

# Main process
if __name__ == "__main__":
    if not os.path.exists(public_dir):
        print(f"Public directory does not exist: {public_dir}")
        exit(1)

    descriptions = load_descriptions()

    for folder in os.listdir(public_dir):
        folder_path = os.path.join(public_dir, folder)
        if os.path.isdir(folder_path):
            generate_tsx_file(folder, descriptions)

    generate_photogroups(descriptions)
    print("Thumbnail generation and TSX file creation complete!")

