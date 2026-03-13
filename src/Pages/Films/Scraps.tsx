import BGVideo from "../../Video";
import Theatre from "./Theatre";

function Scraps() {
  return(
    <>
      <BGVideo />

    <div className="ScrapsPage">
      <Theatre videodata={{title: "Miserable", src:"https://storage.googleapis.com/knockonwoodgrain/Scraps%20New%20AV1.MP4", thumbnail:"Thumbnail/Miserable AV1.jpg", buttontext:"KnockOnWoodGrain", wide:true }} />
      <div className="ScrapsSide">
      <div className="FilmPageHeadings">
        <div className="FilmPageTitle">Scraps</div>
        <div className="FilmPageSubtitle">September 2025 &emsp;&emsp;Dream · Salvia Palth</div>
      </div>
        <div className="FilmPageBody">
        Scraps is a collection of memories throughout my experience of living in Bangalore, a bunch of overlooked clips I had collected.  
        </div>
      </div>
    </div>

    </>
  )
}

export default Scraps;
