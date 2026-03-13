import AboutIcons from ".././SocialAbout";
import Markdown from "react-markdown";
import PCRCWhite from "/PCRC/PCRC White.svg"
import PCRCBlack from "/PCRC/PCRC Black.svg"

function AboutCustom({ aboutData }: { aboutData: { title: string; para: string; svg?: string; } }) {
  return (
    <>
      <div className="titleCustom">{aboutData.title}</div>
      { aboutData.svg == "PCRC" ? (
      <img className="logoCustom" src={PCRCWhite} /> 
      ) : aboutData.svg == "ACDC" ? (
      <img className="logoCustom" src={PCRCBlack} /> 
      ) : (
      <div />
      )
      }
      <div className="textnphoto">
        <div className="para">
        <Markdown>
        {aboutData.para}
        </Markdown>
          <AboutIcons />
        </div>
        <img className="me" src="Thumbnail/Me.webp"></img>
      </div>
    </>
  );
}

export default AboutCustom;
