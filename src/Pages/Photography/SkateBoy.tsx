import Project from "../Project";

const SkatePages = {
  title: "SkateBoy",
  text: "Meeting random ahh Skateboarder at DC",
  download: "Photos/Darktable Fun/Darktable Fun.zip",
  layout: "ZineScrolling",
  Content: [
    "Photos/SkateBoy/P1.webp",
    "Photos/SkateBoy/P2.webp",
    "Photos/SkateBoy/P3.webp",
    "Photos/SkateBoy/P4.webp",
    "Photos/SkateBoy/P5.webp",
    "Photos/SkateBoy/P6.webp",
    "Photos/SkateBoy/P7.webp",
    "Photos/SkateBoy/P8.webp",
    "Photos/SkateBoy/P9.webp",
  ],
};
function SkateBoy() {
  return <Project {...SkatePages} />;
}

export default SkateBoy;
