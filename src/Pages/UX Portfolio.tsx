import Project from "./Project";

const UXPages = {
  title: "Portfolio Design",
  text: "Designing a Portfolio, based on the UX Design Process by Jesse James Garett",
  download: "UX/Portfolio.pdf",
  layout: "PresentationScrolling",
  Content: [
    "UX/1.jpg",
    "UX/2.jpg",
    "UX/3.jpg",
    "UX/4.jpg",
    "UX/5.jpg",
    "UX/6.jpg",
    "UX/7.jpg",
    "UX/8.jpg",
    "UX/9.jpg",
    "UX/10.jpg",
    "UX/11.jpg",
    "UX/12.jpg",
    "UX/13.jpg",
    "UX/14.jpg",
    "UX/15.jpg",
    "UX/16.jpg",
    "UX/17.jpg",
    "UX/18.jpg",
    "UX/19.jpg",
    "UX/20.jpg",
  ],
};
function UX() {
  return <Project {...UXPages} />;
}

export default UX;
