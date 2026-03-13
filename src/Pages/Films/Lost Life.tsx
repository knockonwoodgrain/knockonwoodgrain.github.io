import BGVideo from "../../Video";
import Theatre from "./Theatre";


function LostLife() {
  return(
    <>
      <BGVideo />

    <div className="LostLifePage">
      <Theatre videodata={{title: "Lost life", src:"https://storage.googleapis.com/knockonwoodgrain/Lost%20Life%20AV1.MP4", thumbnail:"Thumbnail/Lost Life AV1.jpg", buttontext: "KnockOnWoodGrain"}} />
      <div className="LostLifeSide">
      <div className="FilmPageHeadings">
        <div className="FilmPageTitle">Lost Life</div>
        <div className="FilmPageSubtitle">Claire de Lune · Claude DeBussy</div>
        <div style={{height: "0.2vw"}}/>
        <div className="FilmPageSubtitle">November 2025</div>
      </div>
      <div className="FilmPageBody">Lost Life is a film made in under 48 hours for a film competition. It follows our protagonist, battling with phone addiction and insomnia, with a dichotomy of what is and what could be. <br /> <br /> The plot was originally written as a release of frustration towards the constant attention grabbing and addicting behaviour of for-profit social media programs, like meta and twitter. These programs are just drug pushers trying to keep their image clean. This film doesn't handle the societal impact, but rather the personal impact this can have on an individual's life.</div>
      </div>
    </div>

    </>
  )
}

export default LostLife;
