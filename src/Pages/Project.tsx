import BGVideo from "../Video";
import SocialIcons from "../Social";
import BackButton from "./BackButton";
import { useRef } from "react";
import { motion } from "motion/react";


function Project(projinfo: {
  title: string;
  text?: string;
  download?: string;
  layout: string;
  Content: Array<string>;
  ContentVertical?: Array<string>;
  video?: boolean;
}) {
  const isMuted = useRef(true);
  return (
    <>
      <BGVideo />
    <div className="ProjectCont">
      <div className="ProjectPageTitleContainer">
        <div className="ProjectTitleTextDownload">
          <BackButton/>
          <div className="ProjectPageTitle">{projinfo.title}</div>
          <div className="ProjectPageText">{projinfo.text}</div>
        </div>
      <div className="ProjIcons">
            <motion.div whileHover={{scale:1.05}} className="ProjDownload Contact">
              {projinfo.download && (
                <a className="dwicon" href={projinfo.download}>
                Full Project!
                </a>
              )}
            </motion.div>
            <SocialIcons />
      </div>
      </div> 
      <div className={projinfo.layout}>
        {projinfo.Content.map((ProjectContent) =>
          // Check if the format is 'video'
          projinfo.video ? (
            // Render video tag if format is 'video'
            <video
              autoPlay
              muted={isMuted.current}
              loop
              className="Page"
              key={`${ProjectContent}-video`}
            >
              <source src={ProjectContent} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            // Render img tag if format is not 'video'
            <img
              className="Page"
              src={ProjectContent}
              key={`${ProjectContent}-image`}
              alt={projinfo.title}
            />
          )
        )}
      </div>
      { projinfo.ContentVertical ? ( 
        <div className="VerticalScrolling" >
        <button className="nav-btn scrollarrow" >
          <svg xmlns="http://www.w3.org/2000/svg" className="nav-btn-svg" viewBox="0 -960 960 960"><path d="m524.26-481-198-198L375-727.74 621.74-481 375-234.26 326.26-283l198-198Z"/></svg>
        </button>
          {projinfo.ContentVertical.map((ProjectContentVertical) =>
            // Check if the format is 'video'
            projinfo.video ? (
              // Render video tag if format is 'video'
              <video
                autoPlay
                muted={isMuted.current}
                loop
                className="PageVertical"
                key={`${ProjectContentVertical}-video`}
              >
                <source src={ProjectContentVertical} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              // Render img tag if format is not 'video'
              <img
                className="PageVertical"
                src={ProjectContentVertical}
                key={`${ProjectContentVertical}-image`}
                alt={projinfo.title}
              />
            )
          )}
        </div>
      ) : (
      <></>
      )}
    </div> 
    </>
  );
}

export default Project;
