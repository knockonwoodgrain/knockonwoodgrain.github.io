import Project from "./Project";
import ZineProjectContents from "./Zine Layout";
const IGORPages = {
  title: "IGOR",
  text: "A text chain I sent to my best friend when I dealt with heartbreak This album helped me articulate it better than I ever couldThank You Tyler, The Creator",
  download: "IGOR/IGOR.pdf",
  layout: ZineProjectContents,
  Content: [
    "IGOR/1.jpg",
    "IGOR/16.jpg",
    "IGOR/2.jpg",
    "IGOR/3.jpg",
    "IGOR/4.jpg",
    "IGOR/5.jpg",
    "IGOR/6.jpg",
    "IGOR/7.jpg",
    "IGOR/8.jpg",
    "IGOR/9.jpg",
    "IGOR/10.jpg",
    "IGOR/11.jpg",
    "IGOR/12.jpg",
    "IGOR/13.jpg",
    "IGOR/14.jpg",
    "IGOR/15.jpg",
  ],
};
function IGOR() {
  return <Project {...IGORPages} />;
}

export default IGOR;
