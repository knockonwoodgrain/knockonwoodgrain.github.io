import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react"
import BackButtonUniversal from "../BackButtonUniversal";

function Theatre({ videodata }: { videodata: { title: string; src: string; thumbnail: string; buttontext: string; wide?: boolean; } }) {
  const [currentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false); // Track playback state
  const [currentTime, setCurrentTime] = useState(0); // Current time of the video
  const [duration, setDuration] = useState(0); // Total duration of the video
  const [isVideoLoaded, setIsVideoLoaded] = useState(false); // Track if video is loaded
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // When the video source changes, reload and play the new video.
 useEffect(() => {
    console.log("Video has changed: ", videodata);   
    console.log("Current Index is Film: ", currentIndex);
    const video = videoRef.current;
    if (!video) return;


    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleTimeUpdate = () => setCurrentTime(video.currentTime);
    const handleDurationChange = () => setDuration(video.duration);

    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);
    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("durationchange", handleDurationChange);

    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("durationchange", handleDurationChange);
    };
  }, [videodata]);

 // When the video source changes, reload it but don't autoplay
 useEffect(() => {
   if (videoRef.current) {
     videoRef.current.load();
     setIsPlaying(false); // Ensure state resets properly
     setIsVideoLoaded(false);
   }
 }, []);

 console.log("Has the video Loaded?", isVideoLoaded)

 const handleVideoEnd = () => {
    setIsPlaying(false);
  };

 const togglePlayPause = () => {
      if (videoRef.current) {
        if (videoRef.current.paused) {
          videoRef.current.play();
          setIsPlaying(true);
        } else {
          videoRef.current.pause();
          setIsPlaying(false);
        }
      }
    };

 // const toggleFullscreen = () => {
 //    if (videoRef.current) {
 //      if (document.fullscreenElement) {
 //        document.exitFullscreen();
 //      } else {
 //        videoRef.current.requestFullscreen();
 //      }
 //    }
 // };


const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

 return (
    <>
    <div className={`cinematographyContainer ${!isVideoLoaded ? "ratio" : ""}`} >
      <div className={`BackButtonOnVideo ${isPlaying ? "hidden" : ""}`}>
        <BackButtonUniversal box={false} white text={videodata.buttontext} />
      </div>
      <motion.div 
            transition={{
            type: 'spring',
            visualDuration: 0.1,
            damping: 10,
            stiffness: 100,
            mass: 0.1,
            bounce: 0.5
            }}
            whileHover={{ scale: 1.5 }}
      className={`videoplaynotice ${isPlaying || !isVideoLoaded ? "hidden" : ""}`} onClick={togglePlayPause}>
<svg xmlns="http://www.w3.org/2000/svg" height="88px" viewBox="0 -960 960 960" width="88px" ><path d="M320-258v-450q0-14 9-22t21-8q4 0 8 1t8 3l354 226q7 5 10.5 11t3.5 14q0 8-3.5 14T720-458L366-232q-4 2-8 3t-8 1q-12 0-21-8t-9-22Z"/></svg>
      </motion.div>
      <div className={`videotitlestamp ${isPlaying || !isVideoLoaded ? "hidden" : ""}`}>
        <div className={`timestamp ${isPlaying || !isVideoLoaded ? "hidden" : ""}`}>
        {formatTime(currentTime)} / {formatTime(duration)}
        </div>
      </div>
      <video
        poster={videodata.thumbnail}
        ref={videoRef}
        loop={false}  // We don't want looping on the single video element.
        className={`${videodata.wide ? "FilmTheatreWide" : "FilmTheatre" } ${!isPlaying ? "darker" : ""}`}
        controls={isPlaying ? true : false}
        onEnded={handleVideoEnd}
        onLoadedData={() => setIsVideoLoaded(true)}
      >
          <source src={videodata.src} type="video/mp4; codec=av01.0.0M.08,aac" />
          {/* Fallback text if the browser does not support the video element */}
          Your browser does not support the video tag.
      </video>
    </div>
    </>
 );
}

export default Theatre;
