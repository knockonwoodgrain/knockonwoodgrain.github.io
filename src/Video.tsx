import { useRef } from "react";

function BGVideo() {
  const isMuted = useRef(true);
  return (
    <video autoPlay muted={isMuted.current} loop id="BgVideo">
      <source src="BG.mp4" type="video/mp4" />
    </video>
  );
}

export default BGVideo;
