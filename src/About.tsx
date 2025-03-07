import SocialIcons from "./Social";
import AboutIcons from "./SocialAbout";

let para =
  "I'm Parth Joshi, a creator. This is my portfolio, showcasing my indulgence and creation of audiovisual artistry—a reflection of knowledge and experience through the lens of creativity. Life is a perspective, and mine may differ from yours. Endless memories are painted through my rearview mirror, creating a looping narrative of perspectives.";

function About() {
  return (
    <>
      <div className="title">KnockOnWoodGrain</div>
      <div className="textnphoto">
        <div className="para">
          {para}
          <AboutIcons />
        </div>
        <img className="me" src="Thumbnail/Me.jpg"></img>
      </div>
    </>
  );
}

export default About;
