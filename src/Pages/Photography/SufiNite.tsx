import Project from "../Project";

const SufiPages = {
  title: "SufiNite",
  text: "Sufi Night at The Cult Terra, Hadapsar, Pune",
  download: "Photos/SufiNite/SufiNite.zip",
  layout: "ZineScrolling",
  Content: [
    "Photos/SufiNite/L1.webp",
    "Photos/SufiNite/L2.webp",
    "Photos/SufiNite/L3.webp",
    "Photos/SufiNite/L4.webp",
    "Photos/SufiNite/P1.webp",
    "Photos/SufiNite/P3.webp",
    "Photos/SufiNite/P4.webp",
    "Photos/SufiNite/P5.webp",
  ],
};
function SufiNite() {
  return <Project {...SufiPages} />;
}

export default SufiNite;
