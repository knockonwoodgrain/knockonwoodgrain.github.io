import BGVideo from "../Video";
import SocialIcons from "../Social";
import BackButton from "./BackButton";

function Project(projinfo: {
  title: string;
  text: string;
  download: string;
  layout: string;
  Content: Array<string>;
}) {
  return (
    <>
      <BGVideo />
      <div className="ProjectPageTitleContainer">
        <BackButton />
        <div className="ProjectTitleTextDownload">
          <div className="ProjectPageTitle">{projinfo.title}</div>
          <div className="ProjectPageText">{projinfo.text}</div>
          <div className="ProjIcons">
            <div className="ProjDownload iconpanel Contact">
              <a href={projinfo.download}>
                <svg
                  className="dwicon"
                  xmlns="https://www.w3.org/2000/svg"
                  viewBox="0 -960 960 960"
                >
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="M480-313 287-506l43-43 120 120v-371h60v371l120-120 43 43-193 193ZM160-160v-203h60v143h520v-143h60v203H160Z"
                  />
                </svg>
              </a>
            </div>
            <SocialIcons />
          </div>
        </div>
      </div>
      <div className={projinfo.layout}>
        {projinfo.Content.map((ProjectContent) => (
          <img className="Page" src={ProjectContent} key={projinfo.title} />
        ))}
      </div>
    </>
  );
}

export default Project;
