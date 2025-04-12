import { useState, useRef, useEffect } from "react";

function Film({ videodata }: { videodata: { title: string; src: string; thumbnail: string } }) {
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

 const toggleFullscreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoRef.current.requestFullscreen();
      }
    }
 };


const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

 return (
    <>
    <div className={`cinematographyContainer ${!isVideoLoaded ? "ratio" : ""}`} onClick={togglePlayPause} >
      <img className={`videocover ${isVideoLoaded ? "hidden" : ""}`} src={videodata.thumbnail}/>
      <div className={`videotitle ${isPlaying || !isVideoLoaded ? "hidden" : ""}`}>{videodata.title}</div>
      <div className={`videoplaynotice ${isPlaying || !isVideoLoaded ? "hidden" : ""}`}>click to play</div>
      <div className={`timestamp ${isPlaying || !isVideoLoaded ? "hidden" : ""}`}>
        {formatTime(currentTime)} / {formatTime(duration)}
      </div>
      <div className={`FilmFullscreen ${!isPlaying || !isVideoLoaded ? "visible" : ""} ${isPlaying ? "hidden" : ""}`} onClick={toggleFullscreen}>
      <svg className="FilmFullscreenSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M104-104v-206h73v133h133v73H104Zm546 0v-73h134v-133h72v206H650ZM104-650v-206h206v72H177v134h-73Zm680 0v-134H650v-72h206v206h-72Z"/></svg>
      </div>
      <video
        ref={videoRef}
        loop={false}  // We don't want looping on the single video element.
        className={`cinematography ${!isPlaying ? "darker" : ""}`}
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

export default Film;
