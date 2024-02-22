import GalleryBox from "./GalleryBox";

const projects = [
  {
    title: "Photography",
    image: "Thumbnail/Photos.jpg",
    category: [],
  },
  {
    title: "3D",
    image: "Thumbnail/ThreeD.jpg",
    category: [],
  },
  {
    title: "Archive",
    image: "Thumbnail/Archive.webp",
    category: [],
  },
];
function Gallery() {
  return (
    <>
      <div className="GalleryTitle">Gallery</div>
      <div className="Projects">
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
