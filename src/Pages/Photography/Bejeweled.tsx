import BGVideo from "../../Video";
import BGBlack from "../../BGBlack.tsx";
import { useEffect } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";
import PhotoDisplay from ".././PhotoDisplay.tsx";

function Miserable() {
  const isSmallDevice = useMediaQuery("only screen and (max-width: 768px)");
  useEffect(() => {
    console.log("Is Small Device: ", isSmallDevice)
  }, [isSmallDevice]);
  const PhotoData = [
    {
      title: "Bejeweled",
      thumbnail: "https://storage.googleapis.com/knockonwoodgrain/Photos/Bejeweled.webp",
      img: [
        {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Bejeweled/Bejeweled001.webp", srcDesc: ""},
        {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Bejeweled/Bejeweled002.webp", srcDesc: ""},
        {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Bejeweled/Bejeweled003.webp", srcDesc: ""},
        {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Bejeweled/Bejeweled004.webp", srcDesc: ""},
        {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Bejeweled/Bejeweled005.webp", srcDesc: ""},
        {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Bejeweled/Bejeweled006.webp", srcDesc: ""},
        {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Bejeweled/Bejeweled007.webp", srcDesc: ""},
        {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Bejeweled/Bejeweled008.webp", srcDesc: ""},
        {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Bejeweled/Bejeweled009.webp", srcDesc: ""},
        {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Bejeweled/Bejeweled0010.webp", srcDesc: ""},
      ],
      description: "",
      categories: [
        "8th August 2024",
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
        Veil of Thorns’<br />
        a bold collection of spiky gothic allure. Perfect for those who dare to stand out.
        </div>
      </div>
    </div>

    </>
  )
}

export default Miserable;
