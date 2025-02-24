
import Project from "../Project";

const Pages = {
  title: "Untitled Unmastered",
  text: "Description for Untitled Unmastered",
  layout: "PresentationScrolling",
  Content: [
  "3D/Untitled Unmastered/untitled3Edited.webp",
  "3D/Untitled Unmastered/untitled4Edited.webp"
],
  category: "Uncategorized",
  video: false,
};

function UntitledUnmastered() {
  return <Project {...Pages} />;
}

export default UntitledUnmastered;
