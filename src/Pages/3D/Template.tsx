import Project from "../Project";

const Pages = {
  title: "",
  text: "",
  layout: "",
  Content: ["3D Renders/"],
  video: true,
};
function Func() {
  return <Project {...Pages} />;
}

export default Func;
