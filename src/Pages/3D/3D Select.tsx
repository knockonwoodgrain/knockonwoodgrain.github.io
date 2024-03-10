import ProjectBox from "../../Gallery/ProjectBox";
import BGVideo from "../../Video";

const ThreeDgroups = [
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
  {
    title: "Photowalk J",
    image: "Thumbnail/PJ.webp",
    categories: ["Riverside"],
  },
  {
    title: "SufiNite",
    image: "Thumbnail/SufiNite.webp",
    categories: ["Event", "Party"],
  },
  {
    title: "Darktable Fun",
    image: "Thumbnail/DFun.webp",
    categories: ["Experimental"],
  },
  {
    title: "SkateBoy",
    image: "Thumbnail/SkateBoy.webp",
    categories: ["Slow Shutter"],
  },
];

function ThreeDSelect() {
  return (
    <>
      <div className="ProjectTitle">3D</div>
      <div className="Projects">
        {ThreeDgroups.map((project) => (
          <ProjectBox
            key={project.title} // Adding a unique key using the index
            {...project}
          />
        ))}
      </div>
      <div className="space" />
      <BGVideo />
    </>
  );
}

export default ThreeDSelect;
