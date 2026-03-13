import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react"

function ProjectBox(project: {
  folder?:string;
  title: string;
  description?: string;
  layout?: string;
  thumbnail: string;
  video?: boolean;
  categories: Array<string>;
}) {
  const mainBox = {
    hover: {
      scale: 1.05
    },
    tap: {
      scale: 0.95
    }

  }
  const isMuted = useRef(true);
  return (
    <>
      <motion.div  
      variants={mainBox}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      transition={{
        type: 'spring',
        visualDuration: 0.2,
        damping: 10,
        stiffness: 200,
        mass: 0.7,
        bounce: 0.5
      }}
      key={project.title} className="ProjectBox">
        <Link to={"/" + project.title} className="Link">
          {project.video ? (
            // Render video tag if format is true
            <video autoPlay muted={isMuted.current} loop className="thumbnail">
              <source src={project.thumbnail} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            // Render img tag if format is false
          <div className="thumbnailCover">
            <motion.img  variants={mainBox} className="thumbnail" src={project.thumbnail} alt="Thumbnail" />
          </div>
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
      </motion.div>
    </>
  );
}

export default ProjectBox;
