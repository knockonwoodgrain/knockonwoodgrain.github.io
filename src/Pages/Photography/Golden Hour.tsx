
import Project from "../Project";

const GoldenHourPages = {
  title: "Golden Hour",
  text: "Golden Hour at Tuck Shop", // Use the description here
  download: "Photos/Golden Hour/Golden Hour.zip",
  layout: "ZineScrolling",
  Content: [
  "Photos/Golden Hour/GoldenHour001.JPG",
  "Photos/Golden Hour/GoldenHour002.JPG",
  "Photos/Golden Hour/GoldenHour003.JPG",
  "Photos/Golden Hour/GoldenHour004.JPG",
  "Photos/Golden Hour/GoldenHour005.JPG",
  "Photos/Golden Hour/GoldenHour006.JPG",
  "Photos/Golden Hour/GoldenHour007.JPG"
],
};

function GoldenHour() {
  return <Project {...GoldenHourPages} />;
}

export default GoldenHour;
