
import Project from "../Project";

const Pages = {
  title: "Phone",
  text: "Description for Phone",
  layout: "PresentationScrolling",
  Content: [
  "3D/Phone/Phone1.mp4"
],
  category: "Uncategorized",
  video: true,
};

function Phone() {
  return <Project {...Pages} />;
}

export default Phone;
