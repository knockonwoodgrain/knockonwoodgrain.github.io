import ProjectBox from "../Gallery/ProjectBox";
import BGVideo from "../Video";
import photogroups from './description.json';

function PhotosSelect() {
  return (
    <>
      <div className="ProjectTitle">Photography</div>
      <div className="Projects">
        {photogroups.map((project) => (
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

export default PhotosSelect;
