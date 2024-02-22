import { Link } from "react-router-dom";

function ProjectBox(project: {
  title: string;
  image: string;
  categories: Array<string>;
}) {
  return (
    <>
      <div key={project.title} className="ProjectBox">
        <Link to={project.title} className="Link">
          <img className="thumbnail" src={project.image} />
          <div className="ProjectText"> {project.title} </div>
          <div className="CategoryContainer">
            {project.categories.map((category, index) => (
              <div key={index} className="Category">
                {category}
              </div>
            ))}
          </div>
        </Link>
      </div>
    </>
  );
}

export default ProjectBox;
