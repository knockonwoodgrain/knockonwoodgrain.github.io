import Project from "../Project";
import ZineProjectContents from "../Zine Layout";
const OptikalPages = {
  title: "Optikal Asylum",
  text: "Optikal Aslyum, an art exhibition at Social",
  download: "Photos/Pongal/Pongal.zip",
  layout: ZineProjectContents,
  Content: [
    "Photos/Optikal Asylum/I1.webp",
    "Photos/Optikal Asylum/I2.webp",
    "Photos/Optikal Asylum/I3.webp",
    "Photos/Optikal Asylum/I4.webp",
    "Photos/Optikal Asylum/I5.webp",
    "Photos/Optikal Asylum/I6.webp",
    "Photos/Optikal Asylum/I7.webp",
    "Photos/Optikal Asylum/I8.webp",
    "Photos/Optikal Asylum/I9.webp",
    "Photos/Optikal Asylum/I10.webp",
    "Photos/Optikal Asylum/L1.webp",
    "Photos/Optikal Asylum/L2.webp",
    "Photos/Optikal Asylum/L3.webp",
    "Photos/Optikal Asylum/L4.webp",
    "Photos/Optikal Asylum/L5.webp",
    "Photos/Optikal Asylum/L5.webp",
    "Photos/Optikal Asylum/P1.webp",
    "Photos/Optikal Asylum/P2.webp",
    "Photos/Optikal Asylum/P3.webp",
    "Photos/Optikal Asylum/P4.webp",
    "Photos/Optikal Asylum/P5.webp",
  ],
};
function Optikal() {
  return <Project {...OptikalPages} />;
}

export default Optikal;
