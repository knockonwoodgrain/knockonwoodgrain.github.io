import os
import json
import textwrap

# Define constants for the public and output directories
PUBLIC_DIR = os.path.join(os.getcwd(), 'public', '3D')
OUTPUT_DIR = os.path.join(os.getcwd(), 'src', 'Pages', '3D')
os.makedirs(OUTPUT_DIR, exist_ok=True)

# Load metadata from the JSON file (metadata.json must be placed in public/3D)
metadata_file = os.path.join(PUBLIC_DIR, 'metadata.json')
if os.path.exists(metadata_file):
    with open(metadata_file, 'r', encoding='utf-8') as f:
        metadata = json.load(f)
else:
    print("Metadata file not found. Ensure 'metadata.json' exists in the public directory.")
    metadata = []


def get_media_files(folder_name):
    """
    Get all media files (images & videos) from a folder.
    Returns a tuple:
      - List of file paths (as URLs, e.g., "3D/FolderName/file.jpg")
      - Boolean flag indicating if the folder contains any video files.
    """
    folder_path = os.path.join(PUBLIC_DIR, folder_name)
    media_files = []
    contains_video = False

    for file in os.listdir(folder_path):
        lower_file = file.lower()
        if lower_file.endswith(('.jpg', '.jpeg', '.png', '.gif', '.webp', '.webm', '.mp4')):
            media_files.append(f"3D/{folder_name}/{file}")
        if lower_file.endswith(('.webm', '.mp4', 'mov')):
            contains_video = True

    return media_files, contains_video


def find_thumbnail(folder_name):
    """
    Look for a thumbnail file in the main 3D directory with a name that matches the folder.
    Returns a tuple of (thumbnail URL, is_video).
    If not found, returns (None, False).
    """
    thumbnail_candidates = [
        f"{folder_name}.jpg", f"{folder_name}.jpeg", f"{folder_name}.png",
        f"{folder_name}.webp", f"{folder_name}.gif", f"{folder_name}.webm", f"{folder_name}.mp4"
    ]
    for file in thumbnail_candidates:
        file_path = os.path.join(PUBLIC_DIR, file)
        if os.path.exists(file_path):
            print(f"Found thumbnail for {folder_name}: {file}")
            is_video = file.lower().endswith(('.webm', '.mp4'))
            return f"3D/{file}", is_video
    print(f"No thumbnail found for folder: {folder_name}")
    return None, False


def get_metadata_for_folder(folder_name):
    """
    Retrieve metadata for a given folder from metadata.json.
    """
    for entry in metadata:
        if entry.get("folder name") == folder_name:
            return entry
    return None


def generate_tsx_file(folder):
    """
    Generate a TSX file for a given 3D project folder.
    The file includes title, description, layout, media content list, category, and video flag.
    """
    folder_path = os.path.join(PUBLIC_DIR, folder)
    if not os.path.exists(folder_path):
        print(f"Folder does not exist: {folder_path}")
        return

    files, auto_detect_video = get_media_files(folder)
    meta = get_metadata_for_folder(folder)

    # Use metadata if available; otherwise, fall back to default values
    description = meta.get("description", f"Description for {folder}") if meta else f"Description for {folder}"
    category = meta.get("category", "Uncategorized") if meta else "Uncategorized"
    layout = meta.get("layout", "ZineScrolling") if meta else "ZineScrolling"
    # If metadata specifies a video flag, it overrides the auto-detected value
    contains_video = meta.get("video", auto_detect_video) if meta else auto_detect_video

    # Remove spaces from folder name to create a safe JS variable name
    folder_safe_name = folder.replace(' ', '')

    tsx_content = textwrap.dedent(f"""\
        import Project from "../Project";

        const Pages = {{
          title: "{folder}",
          text: {json.dumps(description)},
          layout: {json.dumps(layout)},
          Content: {json.dumps(files, indent=2)},
          category: {json.dumps(category)},
          video: {str(contains_video).lower()},
        }};

        function {folder_safe_name}() {{
          return <Project {{...Pages}} />;
        }}

        export default {folder_safe_name};
        """)

    file_path = os.path.join(OUTPUT_DIR, f"{folder}.tsx")
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(tsx_content)
    print(f"Generated TSX file: {file_path}")


def generate_3dgroups():
    """
    Generate a ThreeDGroups.json file that lists all 3D project groups.
    Each group contains a title, a thumbnail (or first media file if thumbnail is missing),
    an array of categories, and a video flag.
    """
    three_d_groups = []
    for folder in os.listdir(PUBLIC_DIR):
        folder_path = os.path.join(PUBLIC_DIR, folder)
        if os.path.isdir(folder_path):
            files, contains_video = get_media_files(folder)
            meta = get_metadata_for_folder(folder)
            title = folder
            category = meta.get("category", "Uncategorized") if meta else "Uncategorized"
            layout = meta.get("layout", "ZineScrolling") if meta else "ZineScrolling"
            thumbnail, is_video = find_thumbnail(folder)

            group = {
                "title": title,
                # If no thumbnail is found, use the first media file as a fallback (if available)
                "content": thumbnail if thumbnail else (files[0] if files else None),
                "layout": [layout],
                "categories": [category],
                "video": is_video or contains_video,
            }
            print(f"Adding group: {group}")
            three_d_groups.append(group)

    print(f"Final ThreeDGroups: {json.dumps(three_d_groups, indent=2)}")

    groups_path = os.path.join(OUTPUT_DIR, 'ThreeDGroups.json')
    groups_content = f"{json.dumps(three_d_groups, indent=2)}"
    with open(groups_path, 'w', encoding='utf-8') as f:
        f.write(groups_content)
    print(f"Generated ThreeDGroups.json at: {groups_path}")


def main():
    if not os.path.exists(PUBLIC_DIR):
        print(f"Public directory does not exist: {PUBLIC_DIR}")
        exit(1)

    # Process each folder in the public 3D directory
    for folder in os.listdir(PUBLIC_DIR):
        folder_path = os.path.join(PUBLIC_DIR, folder)
        if os.path.isdir(folder_path):
            generate_tsx_file(folder)

    generate_3dgroups()
    print("Thumbnail generation and TSX file creation complete!")


if __name__ == "__main__":
    main()
