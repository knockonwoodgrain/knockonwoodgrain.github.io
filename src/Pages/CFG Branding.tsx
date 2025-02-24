import Project from "./Project";

const CFGs = {
  title: "Camp Flog Gnaw Branding",
  text: "A hypothetical illustration and poster branding for The Camp Flog Gnaw Carnival.",
  download: "CFG.pdf",
  layout: "ZineScrolling",
  Content: [
    "CFG/5.webp",
    "CFG/6.webp",
    "CFG/1.webp",
    "CFG/2.webp",
    "CFG/4.webp",
    "CFG/7.webp",
    "CFG/8.webp",
    "CFG/3.webp",
  ],
};
function CampFlogGnaw() {
  return <Project {...CFGs} />;
}

export default CampFlogGnaw;
