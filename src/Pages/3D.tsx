import ProjectBox from "../Gallery/ProjectBox";
import BGVideo from "../Video";
import ThreeDGroups from "../../public/3D/metadata.json"

function ThreeDSelect() {
  return (
    <>
      <div className="ProjectTitle">3D</div>
      <div className="Projects">
        {ThreeDGroups.map((project) => (
          <ProjectBox
            key={project.title} // Adding a unique key using the index
            {...project}
          />
        ))}content
      </div>
      <div className="space" />
      <BGVideo />
    </>
  );
}

export default ThreeDSelect;
