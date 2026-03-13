import BGVideo from "../../Video";
import Theatre from "./Theatre";

function RemainInMe() {
  return(
    <>
      <BGVideo />

    <div className="ScrapsPage">
      <Theatre videodata={{title: "Remain In Me", src:"https://storage.googleapis.com/knockonwoodgrain/Remain%20In%20Me_AV1.mp4", thumbnail:"Cinematography/Remain In Me.jpg", buttontext:"KnockOnWoodGrain"}} />
      <div className="ScrapsSide">
      <div className="FilmPageHeadings">
        <div className="FilmPageTitle">Remain In Me</div>
        <div className="FilmPageSubtitle">Remain In Me · Peter Cat Recording Co.</div>
        <div style={{height: "0.2vw"}}/>
        <div className="FilmPageSubtitle">March 2026</div>
      </div>
        <div className="FilmPageBody">
        I shot PCRC at Indian Cocktail Week in Mumbai. Love u PCRC. 
        </div>
      </div>
    </div>

    </>
  )
}

export default RemainInMe;
