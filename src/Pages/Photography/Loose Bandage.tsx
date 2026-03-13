import Markdown from "react-markdown";
import BGBlack from "../../BGBlack.tsx";
import { useEffect } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";
import BGVideo from "../../Video";
import PhotoDisplay from ".././PhotoDisplay.tsx";

function LooseBandage() {
  const isSmallDevice = useMediaQuery("only screen and (max-width: 768px)");
  useEffect(() => {
    console.log("Is Small Device: ", isSmallDevice)
  }, [isSmallDevice]);
const Body = `On the fine day of _27th August 2024_, I made the impulsive decision of leaving my assignments incomplete to attend a show by **Loose Bandage**, a band from my college. 

&nbsp;   
The show was at Swig, Pune, I obviously ran in trouble with the security about the id and what not, but in the end I covered the gig, and I got some pretty sweet 🍬 photos :)`;
  const PhotoData = [
    {
    title: "Loose Bandage",
    thumbnail: "https://storage.googleapis.com/knockonwoodgrain/Photos/Swig Loose Bandage.webp",
    img: [
      {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Swig Loose Bandage/Swig Loose Bandage001.webp", srcDesc: "Shivani on Guitar and Vocals"},
      {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Swig Loose Bandage/Swig Loose Bandage002.webp", srcDesc: ""},
      {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Swig Loose Bandage/Swig Loose Bandage003.webp", srcDesc: ""},
      {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Swig Loose Bandage/Swig Loose Bandage0014.webp", srcDesc: "Shutter was lowkey at 1/5"},
      {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Swig Loose Bandage/Swig Loose Bandage004.webp", srcDesc: ""},
      {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Swig Loose Bandage/Swig Loose Bandage0015.webp", srcDesc: ""},
      {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Swig Loose Bandage/Swig Loose Bandage005.webp", srcDesc: ""},
      {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Swig Loose Bandage/Swig Loose Bandage0013.webp", srcDesc: ""},
      {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Swig Loose Bandage/Swig Loose Bandage006.webp", srcDesc: ""},
      {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Swig Loose Bandage/Swig Loose Bandage007.webp", srcDesc: ""},
      {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Swig Loose Bandage/Swig Loose Bandage008.webp", srcDesc: ""},
      {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Swig Loose Bandage/Swig Loose Bandage009.webp", srcDesc: ""},
      {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Swig Loose Bandage/Swig Loose Bandage0010.webp", srcDesc: ""},
      {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Swig Loose Bandage/Swig Loose Bandage0011.webp", srcDesc: ""},
      {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Swig Loose Bandage/Swig Loose Bandage0012.webp", srcDesc: ""},
      {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Swig Loose Bandage/Swig Loose Bandage0016.webp", srcDesc: ""},
      {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Swig Loose Bandage/Swig Loose Bandage0017.webp", srcDesc: ""},
      {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Swig Loose Bandage/Swig Loose Bandage0018.webp", srcDesc: ""},
      {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Swig Loose Bandage/Swig Loose Bandage0019.webp", srcDesc: "The band still uses these photos <3"},
    ],
    categories: [
      "27th August 2024",
      "Shoot"
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

export default LooseBandage;
