import os
import json

# Define the public directory and the output directory
public_dir = os.path.join(os.getcwd(), 'public', '3D')  # Adjust path as needed
output_dir = os.path.join(os.getcwd(), 'src', 'Pages', '3D')  # Adjust path as needed
os.makedirs(output_dir, exist_ok=True)

# Load metadata from the JSON file
metadata_file = os.path.join(public_dir, 'metadata.json')
if os.path.exists(metadata_file):
    with open(metadata_file, 'r', encoding='utf-8') as f:
        metadata = json.load(f)
else:
    print("Metadata file not found. Ensure 'metadata.json' exists in the public directory.")
    metadata = []

# Function to get media files from a folder
def get_media_files(folder_name):
    folder_path = os.path.join(public_dir, folder_name)
    media_files = []
    contains_video = False

    for file in os.listdir(folder_path):
        if file.lower().endswith(('.jpg', '.jpeg', '.png', '.gif', '.webp', '.webm', '.mp4')):
            media_files.append(f"3D/{folder_name}/{file}")
        if file.lower().endswith(('.webm', '.mp4')):
            contains_video = True

    return media_files, contains_video

# Function to find thumbnail in the main `3D` folder
def find_thumbnail(folder_name):
    thumbnail_candidates = [
        f"{folder_name}.jpg", f"{folder_name}.jpeg", f"{folder_name}.png",
        f"{folder_name}.webp", f"{folder_name}.gif", f"{folder_name}.webm", f"{folder_name}.mp4"
    ]
    for file in thumbnail_candidates:
        file_path = os.path.join(public_dir, file)
        if os.path.exists(file_path):
            print(f"Found thumbnail for {folder_name}: {file}")  # Debugging line
            is_video = file.lower().endswith(('.webm', '.mp4'))
            return f"3D/{file}", is_video
    print(f"No thumbnail found for folder: {folder_name}")  # Debugging line
    return None, False

# Function to find metadata for a folder
def get_metadata(folder_name):
    for entry in metadata:
        if entry.get("folder name") == folder_name:
            return entry
    return None

# Function to generate a TSX file for a folder
def generate_tsx_file(folder):
    folder_path = os.path.join(public_dir, folder)
    if not os.path.exists(folder_path):
        print(f"Folder does not exist: {folder_path}")
        return

    files, contains_video = get_media_files(folder)

    # Get metadata for the folder or set defaults
    meta = get_metadata(folder)
    description = meta.get("description", f"Description for {folder}") if meta else f"Description for {folder}"
    category = meta.get("category", "Uncategorized") if meta else "Uncategorized"
    contains_video = meta.get("video", contains_video) if meta else contains_video

    # Create TSX content
    folder_safe_name = folder.replace(' ', '')  # Remove spaces for variable names
    tsx_content = f"""
import Project from "../Project";

const Pages = {{
  title: "{folder}",
  text: {json.dumps(description)},
  layout: "PresentationScrolling",
  Content: {json.dumps(files, indent=2)},
  category: {json.dumps(category)},
  video: {str(contains_video).lower()},
}};

function {folder_safe_name}() {{
  return <Project {{...Pages}} />;
}}

export default {folder_safe_name};
"""

    # Write the TSX file
    file_path = os.path.join(output_dir, f"{folder}.tsx")
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(tsx_content)
    print(f"Generated: {file_path}")

# Function to generate the 3Dgroups.js file
def generate_3dgroups():
    three_d_groups = []
    for folder in os.listdir(public_dir):
        folder_path = os.path.join(public_dir, folder)
        if os.path.isdir(folder_path):
            files, contains_video = get_media_files(folder)

            meta = get_metadata(folder)
            title = folder
            category = meta.get("category", "Uncategorized") if meta else "Uncategorized"
            thumbnail, is_video = find_thumbnail(folder)

            # Add group even if thumbnail isn't found
            group = {
                "title": title,
                "content": thumbnail if thumbnail else files[0] if files else None,
                "categories": [category],
                "video": is_video or contains_video,
            }
            print(f"Adding group: {group}")  # Debugging line
            three_d_groups.append(group)

    # Log the final list
    print(f"Final ThreeDGroups: {json.dumps(three_d_groups, indent=2)}")

    # Write the 3Dgroups.js file
    groups_path = os.path.join(output_dir, '3Dgroups.js')
    groups_content = f"const ThreeDgroups = {json.dumps(three_d_groups, indent=2)};\n\nexport default ThreeDgroups;"
    with open(groups_path, 'w', encoding='utf-8') as f:
        f.write(groups_content)
    print(f"Generated 3Dgroups.js at: {groups_path}")

# Main process
if __name__ == "__main__":
    if not os.path.exists(public_dir):
        print(f"Public directory does not exist: {public_dir}")
        exit(1)

    for folder in os.listdir(public_dir):
        folder_path = os.path.join(public_dir, folder)
        if os.path.isdir(folder_path):
            generate_tsx_file(folder)

    generate_3dgroups()
    print("Thumbnail generation and TSX file creation complete!")

