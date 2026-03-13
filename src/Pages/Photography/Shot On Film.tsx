import Markdown from "react-markdown";
import { useEffect } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";
import BGBlack from "../../BGBlack.tsx";
import PhotoDisplay from ".././PhotoDisplay.tsx";
import BGVideo from "../../Video.tsx";

function ShotOnFilm() {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  useEffect(() => {
    console.log("Is Small Device: ", isSmallDevice)
  }, [isSmallDevice])
const Body = `
My first ever roll of Film, a **Kodak ColorPlus 200** shot over a few months on 2024. I used a silly ₹300 point and shoot, developed the roll at _Heera Film Lab_ and scanned in on my Fujifilm XT30 II. 

&nbsp;  

I had to then spend hours inverting and coloring the film in Lightroom, getting rid of the color casts and undoing whatever Fujifilm did to the photo. Next time I'm using a scanner.
`;
  const PhotoData = [
  {
    title: "Shot On Film",
    thumbnail: "https://storage.googleapis.com/knockonwoodgrain/Photos/Film.webp",
    img: [
      {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Film/Film001.webp", srcDesc: "We found this car randomly parked next to my apartment complex"},
      {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Film/Film002.webp", srcDesc: "guy on bike"},
      {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Film/Film003.webp", srcDesc: "huge story behind this, I'll tell you when we meet"},
      {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Film/Film004.webp", srcDesc: ""},
      {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Film/Film005.webp", srcDesc: ""},
      {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Film/Film006.webp", srcDesc: ""},
      {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Film/Film007.webp", srcDesc: ""},
      {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Film/Film008.webp", srcDesc: "You can tell by now I love Rudra"},
      {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Film/Film009.webp", srcDesc: ""},
      {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Film/Film0010.webp", srcDesc: ""},
      {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Film/Film0011.webp", srcDesc: "this is the best shot"},
      {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Film/Film0012.webp", srcDesc: ""},
      {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Film/Film0013.webp", srcDesc: ""},
      {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Film/Film0014.webp", srcDesc: ""},
      {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Film/Film0015.webp", srcDesc: ""},
      {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Film/Film0016.webp", srcDesc: ""},
      {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Film/Film0017.webp", srcDesc: ""},
      {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Film/Film0018.webp", srcDesc: ""},
      {src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Film/Film0019.webp", srcDesc: ""},
    ],
    categories: [
      "2nd August 2024",
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

export default ShotOnFilm;
