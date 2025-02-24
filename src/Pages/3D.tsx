import ProjectBox from "../Gallery/ProjectBox";
import BGVideo from "../Video";
import ThreeDgroups from "./3D/ThreeDgroups.json"

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
