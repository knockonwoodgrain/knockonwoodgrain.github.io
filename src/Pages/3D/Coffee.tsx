
import Project from "../Project";

const Pages = {
  title: "Coffee",
  text: "Description for Coffee",
  layout: "PresentationScrolling",
  Content: [
  "3D/Coffee/CofeeEdited.mp4"
],
  category: "Uncategorized",
  video: true,
};

function Coffee() {
  return <Project {...Pages} />;
}

export default Coffee;
