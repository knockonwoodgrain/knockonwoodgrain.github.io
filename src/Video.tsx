import { useRef } from "react";

function BGVideo() {
  const isMuted = useRef(true);
  return (
    <video autoPlay muted={isMuted.current} loop id="BgVideo">
      <source src="BG.webm" type="video/webm" />
    </video>
  );
}

export default BGVideo;
