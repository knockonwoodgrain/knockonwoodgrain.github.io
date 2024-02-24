import { FunctionComponent } from "react";
import BGVideo from "../Video";
import SocialIcons from "../Social";
import BackButton from "./BackButton";

function Project(projinfo: {
  title: string;
  text: string;
  download: string;
  layout: FunctionComponent<{ content: string }>;
  Content: Array<string>;
}) {
  const LayoutComponent = projinfo.layout;
  return (
    <>
      <BGVideo />
      <div className="ProjectPageTitleContainer">
        <BackButton />
        <div className="ProjectTitleTextDownload">
          <div className="ProjectPageTitle">{projinfo.title}</div>
          <div className="ProjectPageText">{projinfo.text}</div>
          <div className="ProjDownload">
            <a href={projinfo.download}>Download</a>
          </div>
          <SocialIcons />
        </div>
      </div>
      <div className="ProjectPage">
        <div className="Scrolling">
          {projinfo.Content.map((ProjectContent) => (
            <LayoutComponent content={ProjectContent} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Project;
