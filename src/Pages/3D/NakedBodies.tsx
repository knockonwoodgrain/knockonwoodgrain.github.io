
import Project from "../Project";

const Pages = {
  title: "NakedBodies",
  text: "Description for NakedBodies",
  layout: "PresentationScrolling",
  Content: [
  "3D/NakedBodies/WTFISTHIS3Edited.webp"
],
  category: "Uncategorized",
  video: false,
};

function NakedBodies() {
  return <Project {...Pages} />;
}

export default NakedBodies;
