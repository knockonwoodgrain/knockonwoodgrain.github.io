import BGVideo from "../Video";
import SocialIcons from "../Social";
import BackButton from "./BackButton";
import { useRef } from "react";

function Project(projinfo: {
  title: string;
  text?: string;
  download?: string;
  layout: string;
  Content: Array<string>;
  video?: boolean;
}) {
  const isMuted = useRef(true);
  return (
    <>
      <BGVideo />
    <div className="ProjectCont">
      <div className="ProjectPageTitleContainer">
        <div className="ProjectTitleTextDownload">
          <BackButton />
          <div className="ProjectPageTitle">{projinfo.title}</div>
          <div className="ProjectPageText">{projinfo.text}</div>
        </div>
      <div className="ProjIcons">
            <div className="ProjDownload iconpanel Contact">
              {projinfo.download && (
                <a href={projinfo.download}>
                  <svg
                    className="dwicon"
                    xmlns="https://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                  >
                    <path
                      xmlns="http://www.w3.org/2000/svg"
                      d="M480-313 287-506l43-43 120 120v-371h60v371l120-120 43 43-193 193ZM160-160v-203h60v143h520v-143h60v203H160Z"
                    /> </svg> </a>
              )}
            </div>
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
    </div>
    </>
  );
}

export default Project;
