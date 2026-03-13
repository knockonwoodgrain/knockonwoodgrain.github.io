import BGVideo from "../../Video";
import BGBlack from "../../BGBlack.tsx";
import { useEffect } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";
import PhotoDisplay from ".././PhotoDisplay.tsx";

function Goa() {
  const isSmallDevice = useMediaQuery("only screen and (max-width: 768px)");
  useEffect(() => {
    console.log("Is Small Device: ", isSmallDevice)
  }, [isSmallDevice]);
  const PhotoData = [
    {
        title: "Goa",
        thumbnail: "https://storage.googleapis.com/knockonwoodgrain/Photos/Goa.webp",
        img: [
          {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Goa/Goa001.webp", srcDesc: "A **beautiful** resort near baga beach"},
          {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Goa/Goa002.webp", srcDesc: ""},
          {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Goa/Goa003.webp", srcDesc: "Candolim Beach"},
          {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Goa/Goa004.webp", srcDesc: ""},
          {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Goa/Goa005.webp", srcDesc: "Reminded me of **[Copulations](https://www.youtube.com/watch?v=SI4-BgyGclE)**"},
          {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Goa/Goa006.webp", srcDesc: ""},
          {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Goa/Goa007.webp", srcDesc: ""},
          {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Goa/Goa008.webp", srcDesc: ""},
          {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Goa/Goa009.webp", srcDesc: "Found this cat at Gunpowder"},
          {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Goa/Goa0010.webp", srcDesc: ""},
          {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Goa/Goa0011.webp", srcDesc: ""},
          {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Goa/Goa0012.webp", srcDesc: ""},
          {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Goa/Goa0013.webp", srcDesc: ""},
          {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Goa/Goa0014.webp", srcDesc: ""},
          {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Goa/Goa0015.webp", srcDesc: ""},
        ],
        categories: [
          "15th May 2024",
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

export default Goa;
