import ProjectBox from "../Gallery/ProjectBox";
import BGVideo from "../Video";
import ThreeDGroups from "./3D/threed.json"

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
        ))}
      </div>
      <div className="space" />
      <BGVideo />
    </>
  );
}

export default ThreeDSelect;
