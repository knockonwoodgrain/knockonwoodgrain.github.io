import Markdown from "react-markdown";
import { useEffect } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";
import BGBlack from "../../BGBlack.tsx";
import PhotoDisplay from ".././PhotoDisplay.tsx";
import BGVideo from "../../Video.tsx";

function prabhatRoad() {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  useEffect(() => {
    console.log("Is Small Device: ", isSmallDevice)
  }, [isSmallDevice])
const Body = `
I went on a photowalk in **Prabhat Road**, Pune with [_@manngadhant_](https://instagram.com/manngadhant), which was an exhilarating experience. 

&nbsp;

Pune has a lot of rich history, the architechture and environments and prabhat road felt like it still preserves that.
`;
  const PhotoData = [
  {
    title: "Prabhat Road",
    thumbnail: "https://storage.googleapis.com/knockonwoodgrain/Photos/Prabhat Road.webp",
    img: [
      {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Prabhat Road/Prabhat Road001.webp", srcDesc: "House shown in Andhadhun"},
      {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Prabhat Road/Prabhat Road002.webp", srcDesc: ""},
      {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Prabhat Road/Prabhat Road003.webp", srcDesc: ""},
      {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Prabhat Road/Prabhat Road004.webp", srcDesc: "lost"},
      {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Prabhat Road/Prabhat Road005.webp", srcDesc: ""},
      {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Prabhat Road/Prabhat Road006.webp", srcDesc: "found"},
      {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Prabhat Road/Prabhat Road007.webp", srcDesc: ""},
      {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Prabhat Road/Prabhat Road008.webp", srcDesc: ""},
      {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Prabhat Road/Prabhat Road009.webp", srcDesc: ""},
      {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Prabhat Road/Prabhat Road0010.webp", srcDesc: ""},
      {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Prabhat Road/Prabhat Road0011.webp", srcDesc: ""},
      {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Prabhat Road/Prabhat Road0012.webp", srcDesc: ""},
      {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Prabhat Road/Prabhat Road0013.webp", srcDesc: ""},
      {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Prabhat Road/Prabhat Road0014.webp", srcDesc: ""},
      {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Prabhat Road/Prabhat Road0015.webp", srcDesc: ""},
      {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Prabhat Road/Prabhat Road0016.webp", srcDesc: ""},
      {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Prabhat Road/Prabhat Road0017.webp", srcDesc: ""},
      {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Prabhat Road/Prabhat Road0018.webp", srcDesc: ""},
      {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Prabhat Road/Prabhat Road0019.webp", srcDesc: "mess"},
    ],
    categories: [
      "28th Feb 2025",
      "Walk"
    ]
  },
  ];
  return(
    <>
    { isSmallDevice ? <BGBlack /> : <BGVideo />}
    <div className="LostLifePage">
      <PhotoDisplay key={PhotoData[0].thumbnail} photodata={PhotoData[0]} />
      <div className="LostLifeSide">
      <div className="FilmPageHeadings">
        <div className="FilmPageTitle">{PhotoData[0].title}</div>
        <div className="FilmPageSubtitle">{PhotoData[0].categories[0]}</div>
      </div>
        <div className="FilmPageBody">
        <Markdown>
        {Body}
        </ Markdown>
        </div>
      </div>
    </div>

    </>
  )
}

export default prabhatRoad;
