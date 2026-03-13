import BGVideo from "../../Video";
import Theatre from "./Theatre";

function HomeTown() {
  const Home = [
    { src: "001", height: "30" }, { src: "0011", height: "30" }, { src: "008", height: "40" }, { src: "003", height: "30" }, { src: "005", height: "30" }, { src: "007", height: "40" }, { src: "009", height: "30" }, { src: "002", height: "30" }, { src: "0010", height: "30" }, { src: "004", height: "30" }, { src: "006", height: "30" },
  ]
  return(
    <>
      <BGVideo />

    <div className="LostLifePage">
      <Theatre videodata={{title: "Home Town", src:"https://storage.googleapis.com/knockonwoodgrain/home%20town%20AV1.MP4", thumbnail:"Thumbnail/home town AV1.jpg", buttontext:"KnockOnWoodGrain"}} />
      <div className="LostLifeSide">
      <div className="FilmPageHeadings">
        <div className="FilmPageTitle">Home Town</div>
        <div className="FilmPageSubtitle">Moonlight on the River · Mac DeMarco</div>
        <div style={{height: "0.2vw"}}/>
        <div className="FilmPageSubtitle">October 2025</div>
      </div>
        <div className="FilmPageBody">
        My home town didn't really feel like home at all, because home is the people who make it. ♥
        </div>
      {Home.map((Homie) => (
      < img className="FilmPageImage" style={{maxHeight: Homie.height + "vh" }} src={"Cinematography/Home Town/Home Town" + Homie.src + ".webp"}/>
      ))
      }
      </div>
    </div>

    </>
  )
}

export default HomeTown;
