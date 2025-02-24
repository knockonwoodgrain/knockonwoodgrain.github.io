
import Project from "../Project";

const Pages = {
  title: "NY Quickstep",
  text: "Description for NY Quickstep",
  layout: "PresentationScrolling",
  Content: [
  "3D/NY Quickstep/NYQuickstepNewEdited.webp"
],
  category: "Uncategorized",
  video: false,
};

function NYQuickstep() {
  return <Project {...Pages} />;
}

export default NYQuickstep;
