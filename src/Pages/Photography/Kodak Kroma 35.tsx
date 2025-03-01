
import Project from "../Project";

const KodakKroma35Pages = {
  title: "Kodak Kroma 35",
  text: "A really old film camera on a pretty old digi cam", // Use the description here
  download: "Photos/Kodak Kroma 35/Kodak Kroma 35.zip",
  layout: "ZineScrolling",
  Content: [
  "Photos/Kodak Kroma 35/Kroma001.JPG",
  "Photos/Kodak Kroma 35/Kroma002.JPG",
  "Photos/Kodak Kroma 35/Kroma003.JPG",
  "Photos/Kodak Kroma 35/Kroma004.JPG",
  "Photos/Kodak Kroma 35/Kroma005.JPG",
  "Photos/Kodak Kroma 35/Kroma006.JPG"
],
};

function KodakKroma35() {
  return <Project {...KodakKroma35Pages} />;
}

export default KodakKroma35;
