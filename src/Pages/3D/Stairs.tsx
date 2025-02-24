
import Project from "../Project";

const Pages = {
  title: "Stairs",
  text: "Description for Stairs",
  layout: "PresentationScrolling",
  Content: [
  "3D/Stairs/Stairs.webm"
],
  category: "Uncategorized",
  video: true,
};

function Stairs() {
  return <Project {...Pages} />;
}

export default Stairs;
