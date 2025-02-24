import Project from "../Project";

const PinkFloydPages = {
  title: "Pink Floyd",
  text: "A pink floyd cover baby, in blender",
  layout: "PresentationScrolling",
  Content: [
    "3D Renders/Dark Side/DarkSideOfTheMoon.webp",
    "3D Renders/Dark Side/Pink Floyd.webp",
  ],
};
function PinkFloyd() {
  return <Project {...PinkFloydPages} />;
}

export default PinkFloyd;
