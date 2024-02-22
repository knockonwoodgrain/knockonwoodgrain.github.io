import Project from "./Project";
import PresentationProjectContents from "./Presentation Layout";

const Mindsets = {
  title: "Simple Design Project",
  text: "How might we design a tool for handling and understanding stress and performance in school? A design process based project for Kids & Teacher discussing Growth Mindsets, Neuroplasticity, Failure promoting better mental models",
  download: "Simple Design Project/Simple Design Project.zip",
  layout: PresentationProjectContents,
  Content: [
    "Simple Design Project/1.webp",
    "Simple Design Project/2.webp",
    "Simple Design Project/3.webp",
    "Simple Design Project/4.webp",
    "Simple Design Project/5.webp",
    "Simple Design Project/6.webp",
    "Simple Design Project/7.webp",
    "Simple Design Project/8.webp",
    "Simple Design Project/9.webp",
    "Simple Design Project/10.webp",
    "Simple Design Project/11.webp",
  ],
};
function Mindset() {
  return <Project {...Mindsets} />;
}

export default Mindset;
