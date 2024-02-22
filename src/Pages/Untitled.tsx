import PresentationProjectContents from "./Presentation Layout";
import Project from "./Project";
const UntitledPages = {
  title: "Untitled",
  text: "Discovering creativity and artistic prowess in myself at 2 AM, this is where I was reborn ",
  download: "Untitled/Untitled.zip",
  layout: PresentationProjectContents,
  Content: [
    "Untitled/Untitled.webp",
    "Untitled/Untitled3Web.webp",
    "Untitled/Untitled4.webp",
    "Untitled/Untitled5.webp",
    "Untitled/Untitled6.webp",
  ],
};
function Untitled() {
  return <Project {...UntitledPages} />;
}

export default Untitled;
