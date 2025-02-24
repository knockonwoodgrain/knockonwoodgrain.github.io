import Project from "../Project";

const Pages = {
  title: "Naked",
  text: "Naked models just, coexisting peacefully",
  layout: "PresentationScrolling",
  Content: ["3D Renders/NakedBodies/WTFISTHIS3Edited.webp"],
};
function Naked() {
  return <Project {...Pages} />;
}

export default Naked;
