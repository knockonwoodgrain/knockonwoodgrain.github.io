
import Project from "../Project";

const PhotographerPages = {
  title: "Photographer",
  text: "Kodak Kroma 35", // Use the description here
  download: "Photos/Photographer/Photographer.zip",
  layout: "ZineScrolling",
  Content: [
  "Photos/Photographer/Photographer001.JPG",
  "Photos/Photographer/Photographer002.JPG",
  "Photos/Photographer/Photographer003.JPG",
  "Photos/Photographer/Photographer004.JPG",
  "Photos/Photographer/Photographer005.JPG",
  "Photos/Photographer/Photographer006.JPG",
  "Photos/Photographer/Photographer007.JPG",
  "Photos/Photographer/Photographer008.JPG"
],
};

function Photographer() {
  return <Project {...PhotographerPages} />;
}

export default Photographer;
