import BGVideo from "../../Video";
import BGBlack from "../../BGBlack.tsx";
import { useEffect } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";
import PhotoDisplay from ".././PhotoDisplay.tsx";

function GoaBlue() {
  const isSmallDevice = useMediaQuery("only screen and (max-width: 768px)");
  useEffect(() => {
    console.log("Is Small Device: ", isSmallDevice)
  }, [isSmallDevice]);
  const PhotoData = [
    {
        title: "Goa Blue",
        thumbnail: "https://storage.googleapis.com/knockonwoodgrain/Photos/Goa Blue.webp",
        img: [
          {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Goa/Goa Blue006.webp", srcDesc: ""},
          {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Goa/Goa Blue001.webp", srcDesc: ""},
          {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Goa/Goa Blue003.webp", srcDesc: ""},
          {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Goa/Goa Blue004.webp", srcDesc: ""},
          {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Goa/Goa Blue005.webp", srcDesc: ""},
        ],
        categories: [
          "16th May 2024",
          "Trip"
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
        <div className="FilmPageTitle">Goa</div>
        <div className="FilmPageSubtitle">October 2025</div>
      </div>
        <div className="FilmPageBody">
        I went 2 goa with my family and took all these pretty pictures ♥.
        </div>
      </div>
    </div>

    </>
  )
}

export default GoaBlue;
