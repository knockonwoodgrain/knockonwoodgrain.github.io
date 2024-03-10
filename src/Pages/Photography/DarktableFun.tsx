import Project from "../Project";

const FunPages = {
  title: "Darktable Fun",
  text: "Alumni meet darktable darktable Fun fun fun fun fun",
  download: "Photos/Darktable Fun/Darktable Fun.zip",
  layout: "ZineScrolling",
  Content: [
    "Photos/Darktable Fun/L1.webp",
    "Photos/Darktable Fun/L2.webp",
    "Photos/Darktable Fun/P1.webp",
    "Photos/Darktable Fun/P2.webp",
    "Photos/Darktable Fun/P3.webp",
    "Photos/Darktable Fun/P4.webp",
    "Photos/Darktable Fun/P5.webp",
    "Photos/Darktable Fun/P6.webp",
    "Photos/Darktable Fun/P7.webp",
  ],
};
function DarktableFun() {
  return <Project {...FunPages} />;
}

export default DarktableFun;
