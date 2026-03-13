import { useRef, useEffect } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";

function BGVideo() {
  const isMuted = useRef(true);
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  useEffect(() => {
    console.log("Is Small Device: ", isSmallDevice)
  }, [isSmallDevice])
  if (!isSmallDevice) { 
    return (
    <video autoPlay muted={isMuted.current} loop id="BgVideo" preload="auto" >
      <source src="BG.mp4" type="video/mp4" />
    </video>
  );
  } else {
    return (
      <div id="BGBlack">
      </div>
  );
  }
}

export default BGVideo;
