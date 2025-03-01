
import Project from "../Project";

const CampPages = {
  title: "Camp",
  text: "First Camp photowalk on the new Fujifilm", // Use the description here
  download: "Photos/Camp/Camp.zip",
  layout: "ZineScrolling",
  Content: [
  "Photos/Camp/Camp001.JPG",
  "Photos/Camp/Camp002.JPG",
  "Photos/Camp/Camp003.JPG",
  "Photos/Camp/Camp004.JPG",
  "Photos/Camp/Camp005.JPG",
  "Photos/Camp/Camp006.JPG",
  "Photos/Camp/Camp007.JPG",
  "Photos/Camp/Camp008.JPG",
  "Photos/Camp/Camp009.JPG",
  "Photos/Camp/Camp010.JPG",
  "Photos/Camp/Camp011.JPG",
  "Photos/Camp/Camp012.JPG"
],
};

function Camp() {
  return <Project {...CampPages} />;
}

export default Camp;
