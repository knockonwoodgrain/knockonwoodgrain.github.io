
import Project from "../Project";

const Pages = {
  title: "Spinning Donut",
  text: "Description for Spinning Donut",
  layout: "PresentationScrolling",
  Content: [
  "3D/Spinning Donut/Trip.webm"
],
  category: "Uncategorized",
  video: true,
};

function SpinningDonut() {
  return <Project {...Pages} />;
}

export default SpinningDonut;
