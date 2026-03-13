import BGVideo from "../../Video";
import { motion } from "motion/react"
import Theatre from "./Theatre";

function Miserable() {
  return(
    <>
      <BGVideo />

    <div className="LostLifePage">
      <Theatre videodata={{title: "Miserable", src:"https://storage.googleapis.com/knockonwoodgrain/Miserable%20AV1.MP4", thumbnail:"Thumbnail/Miserable AV1.jpg", buttontext:"KnockOnWoodGrain"}} />
      <div className="LostLifeSide">
      <div className="FilmPageHeadings">
        <div className="FilmPageTitle">Miserable</div>
        <div className="FilmPageSubtitle">More Pork · Peter Cat Recording Co.</div>
        <div style={{height: "0.2vw"}}/>
        <div className="FilmPageSubtitle">October 2025</div>
      </div>
        <div className="FilmPageBody">
        We're all so miserable, people can & do choose to delude themselves into thinking all of this is normal. The faschism, oligarchy, the unchecked capitalism, genocide, climate catastrophe, all of the shit that we live with daily, all the pain and misery. <br /><br /> You can shield yourself as much as you try, you earn and you get exploited daily and live a more comfortable life than most others. Until the air you breathe is too toxic, the water is poisoned, the world too unsafe to exist in. 
        </div>
      < motion.img 
            transition={{
            type: 'spring',
            visualDuration: 0.1,
            damping: 10,
            stiffness: 100,
            mass: 0.1,
            bounce: 0.5
            }}
            whileHover={{ scale: 1.05 }}
      className="FilmPageImage" style={{maxHeight: "40%"}} src="Thumbnail/Miserable AV1.jpg"/>
      </div>
    </div>

    </>
  )
}

export default Miserable;
