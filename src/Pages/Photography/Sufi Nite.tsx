import Markdown from "react-markdown";
import { useEffect } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";
import BGBlack from "../../BGBlack.tsx";
import PhotoDisplay from ".././PhotoDisplay.tsx";
import BGVideo from "../../Video.tsx";

function SufiNite() {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  useEffect(() => {
    console.log("Is Small Device: ", isSmallDevice)
  }, [isSmallDevice])
const Body = `
Shot on a Canon 1200D, completely random gig at The Cult Terra, Pune. This was before I even started using Lightroom. Edited in free and open source Darktable, which has some insane quirks and features.
`;
  const PhotoData = [
  {
    title: "Sufi Nite",
    thumbnail: "https://storage.googleapis.com/knockonwoodgrain/Photos/Sufi Nite.webp",
    img: [
      {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/SufiNite/Sufi Nite001.webp", srcDesc: ""},
      {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/SufiNite/Sufi Nite002.webp", srcDesc: ""},
      {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/SufiNite/Sufi Nite003.webp", srcDesc: ""},
      {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/SufiNite/Sufi Nite004.webp", srcDesc: ""},
      {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/SufiNite/Sufi Nite005.webp", srcDesc: ""},
      {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/SufiNite/Sufi Nite006.webp", srcDesc: ""},
      {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/SufiNite/Sufi Nite007.webp", srcDesc: ""},
      {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/SufiNite/Sufi Nite008.webp", srcDesc: ""},
      {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/SufiNite/Sufi Nite009.webp", srcDesc: ""},
      {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/SufiNite/Sufi Nite0010.webp", srcDesc: ""},
    ],
    categories: [
      "16th May 2024",
      "Trip"
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

export default SufiNite;
