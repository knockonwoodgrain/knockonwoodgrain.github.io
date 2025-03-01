
import Project from "../Project";

const SufiNitePages = {
  title: "SufiNite",
  text: "A vibrant Sufi night event, at The Cult Terra", // Use the description here
  download: "Photos/SufiNite/SufiNite.zip",
  layout: "ZineScrolling",
  Content: [
  "Photos/SufiNite/SufiNite001.JPG",
  "Photos/SufiNite/SufiNite002.JPG",
  "Photos/SufiNite/SufiNite003.JPG",
  "Photos/SufiNite/SufiNite004.JPG",
  "Photos/SufiNite/SufiNite005.JPG",
  "Photos/SufiNite/SufiNite006.JPG",
  "Photos/SufiNite/SufiNite007.JPG",
  "Photos/SufiNite/SufiNite008.JPG",
  "Photos/SufiNite/SufiNite009.JPG",
  "Photos/SufiNite/SufiNite010.JPG"
],
};

function SufiNite() {
  return <Project {...SufiNitePages} />;
}

export default SufiNite;
