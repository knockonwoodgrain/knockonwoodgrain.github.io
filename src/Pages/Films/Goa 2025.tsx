import BGVideo from "../../Video";
import Theatre from "./Theatre";

function Goa2025() {
  const Goa = [
    { src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Goa/Goa001.webp", height: "100" },  
    { src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Goa/Goa002.webp", height: "100" },  
    { src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Goa/Goa003.webp", height: "100" },  
    { src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Goa/Goa004.webp", height: "100" },  
    { src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Goa/Goa005.webp", height: "100" },  
    { src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Goa/Goa006.webp", height: "100" },  
    { src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Goa/Goa007.webp", height: "100" },  
    { src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Goa/Goa008.webp", height: "100" },  
    { src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Goa/Goa009.webp", height: "100" },  
    { src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Goa/Goa0010.webp", height: "100" },  
    { src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Goa/Goa0011.webp", height: "100" },  
    { src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Goa/Goa0012.webp", height: "100" },  
    { src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Goa/Goa0013.webp", height: "100" },  
    { src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Goa/Goa0014.webp", height: "100" },  
    { src: "https://storage.googleapis.com/knockonwoodgrain/Photos/Goa/Goa0015.webp", height: "100" },  
  ]
  return(
    <>
      <BGVideo />

    <div className="LostLifePage">
      <Theatre videodata={{title: "Goa 2025", src:"https://storage.googleapis.com/knockonwoodgrain/Goa%202025%20AV1.MP4", thumbnail:"Thumbnail/Goa 2025.jpg", buttontext:"KnockOnWoodGrain"}} />
      <div className="LostLifeSide">
      <div className="FilmPageHeadings">
        <div className="FilmPageTitle">Goa 2025</div>
        <div className="FilmPageSubtitle">I'm Home · Peter Cat Recording Co.</div>
        <div style={{height: "0.2vw"}}/>
        <div className="FilmPageSubtitle">October 2025</div>
      </div>
        <div className="FilmPageBody">
        Went to Goa with my family and explored serene and beautiful places. Kind of dragged them to get sunsets and beaches on my sensor. A Beautiful Life.
        </div>
      {Goa.map((Goan) => (
      < img className="FilmPageImage" style={{maxHeight: Goan.height + "vh" }} src={Goan.src}/>
      ))
      }
      </div>
    </div>

    </>
  )
}

export default Goa2025;
