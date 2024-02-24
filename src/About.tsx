import SocialIcons from "./Social";

let para =
  "I'm Parth Joshi a creator. This is my portfolio, to display my indulgence and creation of audiovisual artistry. Reflection of knowledge and experience through the lens of creativity.Life is perspective. My perspective may differ from yours. Endless memories painted through my rearview mirror. Looping Perspectives.";

function About() {
  return (
    <>
      <div className="title">KnockOnWoodGrain</div>
      <div className="textnphoto">
        <div className="para">
          {para}
          <SocialIcons />
        </div>
        <img className="me" src="Thumbnail/Me.jpg"></img>
      </div>
    </>
  );
}

export default About;
