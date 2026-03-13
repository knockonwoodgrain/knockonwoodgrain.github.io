import Markdown from "react-markdown";
import BGVideo from "../../Video";
import BGBlack from "../../BGBlack.tsx";
import { useEffect } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";
import PhotoDisplay from ".././PhotoDisplay.tsx";

function Camp() {
  const Body = `
**MG Road, Camp, Pune**, is a place that's intimate to my heart. I've had so many walks, conversations and hangouts here. It's so rich and colorful with people and experiences. 

&nbsp;

These photos can barely do it justice, and yet I keep going back and trying :)
  `
  const isSmallDevice = useMediaQuery("only screen and (max-width: 768px)");
  useEffect(() => {
    console.log("Is Small Device: ", isSmallDevice)
  }, [isSmallDevice]);
  const PhotoData = [
    {
      title: "Camp",
      thumbnail: "https://storage.googleapis.com/knockonwoodgrain/Photos/Camp.webp",
      img: [
        {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Camp/Camp001.webp", srcDesc: "A very nice house I found in camp"},
        {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Camp/Camp002.webp", srcDesc: ""},
        {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Camp/Camp003.webp", srcDesc: ""},
        {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Camp/Camp004.webp", srcDesc: ""},
        {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Camp/Camp005.webp", srcDesc: ""},
        {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Camp/Camp006.webp", srcDesc: ""},
        {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Camp/Camp007.webp", srcDesc: ""},
        {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Camp/Camp008.webp", srcDesc: ""},
        {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Camp/Camp009.webp", srcDesc: ""},
        {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Camp/Camp0010.webp", srcDesc: ""},
        {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Camp/Camp0011.webp", srcDesc: ""},
        {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Camp/Camp0012.webp", srcDesc: "A very pretty photo of how camp looks during sunset"},
        {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Camp/Camp0013.webp", srcDesc: ""},
        {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Camp/Camp0014.webp", srcDesc: ""},
        {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Camp/Camp0015.webp", srcDesc: ""},
        {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Camp/Camp0016.webp", srcDesc: ""},
      ],
      categories: [
        "14th Dec 2024",
        "Walk"
      ]
    }
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

export default Camp;
