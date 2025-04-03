import Project from "./Project";

const WavesPage = {
  title: "Waves",
  text: "Waves is a college club that I started with a friend (Rithik Hargunani)",
  download: "Waves/club event reports.pdf",
  layout: "PresentationScrolling",
  Content: [
    "Waves/waves report.jpg",
    "Waves/waves report2.jpg",
    "Waves/waves report3.jpg",
    "Waves/waves report4.jpg",
    "Waves/waves report5.jpg",
    "Waves/waves report6.jpg",
    "Waves/waves report7.jpg",
    "Waves/waves report8.jpg",
    "Waves/waves report9.jpg",
    "Waves/waves report10.jpg",
    "Waves/waves report11.jpg"
  ],
};
function Waves() {
  return <Project {...WavesPage} />;
}

export default Waves;
