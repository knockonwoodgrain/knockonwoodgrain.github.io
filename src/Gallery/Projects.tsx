import ProjectBox from "./ProjectBox";
import arts from "./arts.json" 
import designs from "./designs.json"

function Projects() {
  return (
    <>
      <div className="ProjectTitle">Art</div>
      <div className="Projects">
        {arts.map((art) => (
          <ProjectBox
            key={art.title} // Adding a unique key using the index
            {...art}
          />
        ))}
      </div>
      <div className="ProjectTitle">Design</div>
      <div className="Projects">
        {designs.map((design) => (
          <ProjectBox
            key={design.title} // Adding a unique key using the index
            {...design}
          />
        ))}
      </div>
    </>
  );
}

export default Projects;
