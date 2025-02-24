import GalleryBox from "./GalleryBox";

const projects = [
  {
    title: "Photography",
    content: "Thumbnail/Good Thumbnail.webm",
    category: [],
    video: true,
  },
  {
    title: "3D",
    content: "3D/Spinning Donut.webm",
    category: [],
    video: true,
  },
  {
    title: "Cinematography",
    content: "Thumbnail/Archive.webp",
    category: [],
  },
];
function Gallery() {
  return (
    <>
      <div className="GalleryTitle">Gallery</div>
      <div className="Gallery">
        {projects.map((project) => (
          <GalleryBox
            key={project.title} // Adding a unique key using the index
            {...project}
          />
        ))}
      </div>
    </>
  );
}

export default Gallery;
