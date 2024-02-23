import ProjectBox from "../../Gallery/ProjectBox";
import BGVideo from "../../Video";

const photogroups = [
  {
    title: "Pongal",
    image: "Thumbnail/Pongal.webp",
    categories: ["Festival"],
  },
  {
    title: "Optikal Asylum",
    image: "Thumbnail/Optikal.webp",
    categories: ["Exhibition", "Artists"],
  },
];

function PhotosSelect() {
  return (
    <>
      <div className="Projects">
        {photogroups.map((project) => (
          <ProjectBox
            key={project.title} // Adding a unique key using the index
            {...project}
          />
        ))}
      </div>
      <BGVideo />
    </>
  );
}

export default PhotosSelect;
