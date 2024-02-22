import { FunctionComponent } from "react";
import BGVideo from "../Video";

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
        <div className="ProjectPageTitle">{projinfo.title}</div>
        <div className="ProjectPageText">{projinfo.text}</div>
        <div className="ProjDownload">
          <a href={projinfo.download}>Download</a>
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
