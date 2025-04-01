import Project from "./Project";

const DunePage= {
  title: "The Gom Jabbar Collection",
  text: "A collaboration project with Aditya Damle (@art_damle), to make renders and branding featuring illustrated book covers of the Dune series.",
  download: "https://www.behance.net/gallery/201006809/Dune-The-Gom-Jabbar-Collection",
  layout: "PresentationScrolling",
  Content: [
    "Dune/P.jpg"
  ],
};
function Dunes() {
  return <Project {...DunePage} />;
}

export default Dunes;
