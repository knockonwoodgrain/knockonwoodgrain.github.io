import Markdown from "react-markdown";
import BGBlack from "../../BGBlack.tsx";
import { useEffect } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";
import BGVideo from "../../Video";
import PhotoDisplay from ".././PhotoDisplay.tsx";

function twentyYears() {
  const isSmallDevice = useMediaQuery("only screen and (max-width: 768px)");
  useEffect(() => {
    console.log("Is Small Device: ", isSmallDevice)
  }, [isSmallDevice]);
const Body = `
It was Rudra's Birthday, _28th December 2024_, a wonderful day at Camp, riding on his Aether 450x during the sunset. Then going to a garden and just talking for hours


&nbsp;

I wrote a poem,

&nbsp;

rudra turns 20 today,

but it sure doesn't feel like he cares

he sure doesn't peel eyes for stares

knees die of stairs,

he sure doesn't, but I cry today

I pry my eyes dry to this beautiful sky

today, it's been a few years

_will you talk today?_
`;
  const PhotoData = [
  {
    title: "Twenty Years",
    thumbnail: "https://storage.googleapis.com/knockonwoodgrain/Photos/Twenty Years.webp",
    img: [
      {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Twenty Years/Twenty Years001.webp", srcDesc: ""},
      {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Twenty Years/Twenty Years002.webp", srcDesc: "Meat Grinder, MF DOOM"},
      {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Twenty Years/Twenty Years003.webp", srcDesc: ""},
      {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Twenty Years/Twenty Years004.webp", srcDesc: ""},
      {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Twenty Years/Twenty Years005.webp", srcDesc: ""},
      {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Twenty Years/Twenty Years006.webp", srcDesc: "_Not Gonna Lie, Geoffrey Gascoyne_"},
    ],
    categories: [
      "28th Dec 2024",
      "Birthday"
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

export default twentyYears;
