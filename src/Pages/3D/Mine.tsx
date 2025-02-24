
import Project from "../Project";

const Pages = {
  title: "Mine",
  text: "Description for Mine",
  layout: "PresentationScrolling",
  Content: [
  "3D/Mine/Mine.webp"
],
  category: "Uncategorized",
  video: false,
};

function Mine() {
  return <Project {...Pages} />;
}

export default Mine;
