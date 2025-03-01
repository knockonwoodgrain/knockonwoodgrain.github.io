
import Project from "../Project";

const SauFTPages = {
  title: "Sau FT",
  text: "Sau Swarit Rudra at FT", // Use the description here
  download: "Photos/Sau FT/Sau FT.zip",
  layout: "ZineScrolling",
  Content: [
  "Photos/Sau FT/SauFT001.JPG",
  "Photos/Sau FT/SauFT002.JPG",
  "Photos/Sau FT/SauFT003.JPG",
  "Photos/Sau FT/SauFT004.JPG",
  "Photos/Sau FT/SauFT005.JPG",
  "Photos/Sau FT/SauFT006.JPG",
  "Photos/Sau FT/SauFT007.JPG",
  "Photos/Sau FT/SauFT008.JPG",
  "Photos/Sau FT/SauFT009.JPG"
],
};

function SauFT() {
  return <Project {...SauFTPages} />;
}

export default SauFT;
