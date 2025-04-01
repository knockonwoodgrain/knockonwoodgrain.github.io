import Project from "./Project";

const JoliesPage = {
  title: "Jolies Magic of Summer",
  text: "A freelance gig exploration with DAM Design, for Jolies",
  download: "Jolies/Jolies.zip",
  layout: "PresentationScrolling",
  Content: [
    "Jolies/1.jpg",
    "Jolies/2.jpg",
    "Jolies/3.jpg",
    "Jolies/4.jpg",
    "Jolies/5.jpg"
  ],
};
function Jolies() {
  return <Project {...JoliesPage} />;
}

export default Jolies;
