
import Project from "../Project";

const VelvetRedPages = {
  title: "Velvet Red",
  text: "Hues of Red and Blue", // Use the description here
  download: "Photos/Velvet Red/Velvet Red.zip",
  layout: "ZineScrolling",
  Content: [
  "Photos/Velvet Red/Velvet Red001.JPG",
  "Photos/Velvet Red/Velvet Red002.JPG",
  "Photos/Velvet Red/Velvet Red003.JPG",
  "Photos/Velvet Red/Velvet Red004.JPG",
  "Photos/Velvet Red/Velvet Red005.JPG",
  "Photos/Velvet Red/Velvet Red006.JPG",
  "Photos/Velvet Red/Velvet Red007.JPG",
  "Photos/Velvet Red/Velvet Red008.JPG"
],
};

function VelvetRed() {
  return <Project {...VelvetRedPages} />;
}

export default VelvetRed;
