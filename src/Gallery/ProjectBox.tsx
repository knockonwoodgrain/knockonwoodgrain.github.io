import { useRef } from "react";
import { Link } from "react-router-dom";

function ProjectBox(project: {
  title: string;
  content: string;
  video?: boolean;
  categories: Array<string>;
}) {
  const isMuted = useRef(true);
  return (
    <>
      <div key={project.title} className="ProjectBox">
        <Link to={project.title} className="Link">
          {project.video ? (
            // Render video tag if format is true
            <video autoPlay muted={isMuted.current} loop className="thumbnail">
              <source src={project.content} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            // Render img tag if format is false
            <img className="thumbnail" src={project.content} alt="Thumbnail" />
          )}
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
