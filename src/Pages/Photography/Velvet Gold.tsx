
import Project from "../Project";

const VelvetGoldPages = {
  title: "Velvet Gold",
  text: "Hues of Gold and Blue", // Use the description here
  download: "Photos/Velvet Gold/Velvet Gold.zip",
  layout: "ZineScrolling",
  Content: [
  "Photos/Velvet Gold/Velvet Gold001.JPG",
  "Photos/Velvet Gold/Velvet Gold002.JPG",
  "Photos/Velvet Gold/Velvet Gold003.JPG",
  "Photos/Velvet Gold/Velvet Gold004.JPG"
],
};

function VelvetGold() {
  return <Project {...VelvetGoldPages} />;
}

export default VelvetGold;
