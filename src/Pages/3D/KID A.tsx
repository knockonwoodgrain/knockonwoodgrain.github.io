
import Project from "../Project";

const Pages = {
  title: "KID A",
  text: "Description for KID A",
  layout: "PresentationScrolling",
  Content: [
  "3D/KID A/KIDA.png",
  "3D/KID A/KIDA.webp"
],
  category: "Uncategorized",
  video: false,
};

function KIDA() {
  return <Project {...Pages} />;
}

export default KIDA;
