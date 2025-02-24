import Project from "../Project";

const DreamPages = {
  title: "Dream",
  text: "I dreamt of living here once",
  layout: "PresentationScrolling",
  Content: [
    "3D Renders/Untitled Unmastered/untitled4Edited.webp",
    "3D Renders/Untitled Unmastered/untitled3Edited.webp",
  ],
};
function Dream() {
  return <Project {...DreamPages} />;
}

export default Dream;
