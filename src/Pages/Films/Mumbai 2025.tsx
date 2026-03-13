import BGVideo from "../../Video";
import Theatre from "./Theatre";

function Mumbai2025() {
  return(
    <>
      <BGVideo />

    <div className="ScrapsPage">
      <Theatre videodata={{title: "Miserable", src:"https://storage.googleapis.com/knockonwoodgrain/Mumbai%202025%20AV1.mp4", thumbnail:"Thumbnail/Miserable AV1.jpg", buttontext:"KnockOnWoodGrain", wide:true }} />
      <div className="ScrapsSide">
      <div className="FilmPageHeadings">
        <div className="FilmPageTitle">Mumbai 2025</div>
        <div className="FilmPageSubtitle">Planetarium · Justin Huruwitz</div>
        <div style={{height: "0.2vw"}}/>
        <div className="FilmPageSubtitle">March 2025</div>
      </div>
        <div className="FilmPageBody">
        I went to Mumbai and ran into two of my best friends who I didn't even know were here. I love Mumbai so much, it's so beautiful
        </div>
      </div>
    </div>

    </>
  )
}

export default Mumbai2025;
