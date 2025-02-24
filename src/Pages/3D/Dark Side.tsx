
import Project from "../Project";

const Pages = {
  title: "Dark Side",
  text: "Description for Dark Side",
  layout: "PresentationScrolling",
  Content: [
  "3D/Dark Side/DarkSideOfTheMoon.webp",
  "3D/Dark Side/Pink Floyd.webp"
],
  category: "Uncategorized",
  video: false,
};

function DarkSide() {
  return <Project {...Pages} />;
}

export default DarkSide;
