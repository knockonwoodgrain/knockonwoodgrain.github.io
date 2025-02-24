import Project from "../Project";

const Pages = {
  title: "VDK Anim",
  text: "SPINNY SPINNY SPINNYYYNNYY SPIN SPINNYY TEXT SPIN SPIN SPNIN",
  layout: "PresentationScrolling",
  Content: ["3D Renders/Spinning Donut/Trip.webm"],
  video: true,
};
function VDKAnim() {
  return <Project {...Pages} />;
}

export default VDKAnim;
