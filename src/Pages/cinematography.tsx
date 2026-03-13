import { useRef } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion,useInView } from "motion/react"
import { useMediaQuery } from "@uidotdev/usehooks";

const Videos = [
  {
    title: "Lost Life",
    src: "https://storage.googleapis.com/knockonwoodgrain/Scraps%20New%20AV1.MP4",
    thumbnail: "/Cinematography/Lost Life.jpg",
    thumbnailvideo: "https://storage.googleapis.com/knockonwoodgrain/VideoThumbnail/Lost%20Life.mp4",
  },
  {
    title: "Remain In Me",
    src: "https://storage.googleapis.com/knockonwoodgrain/Remain%20In%20Me_AV1.mp4",
    thumbnail: "/Cinematography/Remain In Me.jpg",
    thumbnailvideo: "https://storage.googleapis.com/knockonwoodgrain/VideoThumbnail/Remain%20In%20Me.mp4",
  },
  {
    title: "Miserable",
    src: "https://storage.googleapis.com/knockonwoodgrain/Scraps%20New%20AV1.MP4",
    thumbnail: "/Cinematography/Miserable.jpg",
    thumbnailvideo: "https://storage.googleapis.com/knockonwoodgrain/VideoThumbnail/Miserable.mp4",
  },
  {
    title: "Home Town",
    src: "https://storage.googleapis.com/knockonwoodgrain/Scraps%20New%20AV1.MP4",
    thumbnail: "/Cinematography/Home Town.jpg",
    thumbnailvideo: "https://storage.googleapis.com/knockonwoodgrain/VideoThumbnail/Home%20Town.mp4",
  },
  {
    title: "Scraps",
    src: "https://storage.googleapis.com/knockonwoodgrain/Scraps%20New%20AV1.MP4",
    thumbnail: "/Cinematography/Scraps New AV1.jpg",
    thumbnailvideo: "https://storage.googleapis.com/knockonwoodgrain/VideoThumbnail/Scraps.mp4",
  },
  {
    title: "Goa 2025",
    src: "https://storage.googleapis.com/knockonwoodgrain/Goa%202025%20AV1.MP4",
    thumbnail: "/Cinematography/Goa 2025 AV1.jpg",
    thumbnailvideo: "https://storage.googleapis.com/knockonwoodgrain/VideoThumbnail/Goa.mp4",
  },
  {
    title: "Mumbai 2025",
    src: "https://storage.googleapis.com/knockonwoodgrain/Mumbai%202025%20AV1.mp4",
    thumbnail: "/Cinematography/Trailer AV1.jpg",
    thumbnailvideo: "https://storage.googleapis.com/knockonwoodgrain/VideoThumbnail/Mumbai.mp4",
  },
  // {
  //   title: "Night Life",
  //   src: "https://storage.googleapis.com/knockonwoodgrain/Night%20Life%20AV1.mp4",
  //   thumbnail: "/Cinematography/Night Life AV1.jpg",
  // },
  // {
  //   title: "Hazy Day",
  //   src: "/Cinematography/Hazy Day AV1.mp4",
  //   thumbnail: "/Cinematography/Hazy Day AV1.jpg",
  // },
  // {
  //   title: "Decayed Hermit",
  //   src: "https://storage.googleapis.com/knockonwoodgrain/FCP%20AV1.mp4",
  //   thumbnail: "/Cinematography/FCP AV1.jpg",
  // },
  // {
  //   title: "Valentines Day",
  //   src: "https://storage.googleapis.com/knockonwoodgrain/Valentines%20AV1.mp4",
  //   thumbnail: "/Cinematography/Valentines AV1.jpg",
  // }
];

function Cinematography() {
  const isMuted = useRef(true);
  const videoRefs = useRef(new Map());
  // const [isPlaying, setIsPlaying] = useState(false); // Track playback state
  const ref = useRef(null);
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");

  function getMap() {
    if (!videoRefs.current) {
      // Initialize the Map on first usage.
    videoRefs.current = new Map();
    console.log(videoRefs.current)
    }
    return videoRefs.current;
  }


  const handlepause = (index:number) =>  {
    const map = getMap();
    const node : HTMLVideoElement | undefined = map.get(index);
    const source =  node?.currentSrc
    console.log("Element"+ source +  "has left the viewport")
    if (isSmallDevice) {
    node?.pause()
    }
  };

  const handleplay = (index:number) =>  {
    const map = getMap();
    const node : HTMLVideoElement | undefined = map.get(index);
    const source =  node?.currentSrc
    console.log("Element"+ source +  "has entered the viewport")
    if (isSmallDevice) {
    node?.play()
    }
  };

  const handlehoverplay = (index:number) =>  {
    const map = getMap();
    const node : HTMLVideoElement | undefined = map.get(index);
    const source =  node?.currentSrc
    console.log("Element"+ source +  "has started hovering")
    node?.play()
  };

  const handlehoverpause = (index:number) =>  {
    const map = getMap();
    const node : HTMLVideoElement | undefined = map.get(index);
    const source =  node?.currentSrc
    console.log("Element"+ source +  "has stopped hovering")
    node?.pause()
  };

  // if (videoRef.current?.paused) {
  //   setIsPlaying(false);
  //   console.log(isPlaying)
  // } else {
  //   setIsPlaying(true);
  //   console.log(isPlaying)
  // }


  useEffect(() => {
    console.log("Is Small Device: ", isSmallDevice)
  }, [isSmallDevice])

  const isInView = useInView(ref, {margin: "0px 0px 0px 0px"})
  useEffect(() => {
    console.log("Element is in view: ", isInView)
  }, [isInView])

  const filmVariant = {
    initial: {
      scale: 1.0001
    },
    hover: {
      scale: 1.05
    },
    onscreen: {
      scale: 1.01
    },
  };
  const titleVariant = {
    onscreen: {
      display: "flex",
      opacity: 0,
    },
  };

  const maskVariant = {
    initial: {
      maskImage: "radial-gradient(ellipse farthest-side at right top, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0) 150%)",
    },
    hover: {
      maskImage: "radial-gradient(ellipse farthest-side at right top, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 1) 150%)",
      scale: 1.01,
      opacity: 0,
    },
    onscreen: {
      maskImage: "radial-gradient(ellipse farthest-side at right top, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 0) 150%)",
      scale: 1.01,
    },
  };  

  const thumbnailVariant = {
    onscreen: {
      scale: 1.01,
      display: "flex",
      opacity: 1,
    },
  };

  return (
    <>
    <div className="ProjectTitle">Films</div>
      {/* Pass the current selected video to the Film component */}
      {/*   <Film key={Videos[currentIndex].src} videodata={Videos[currentIndex]} />
*/}       
      <div className="FilmGrid">
        {Videos.map((video, index) => (
        <Link key={index} to={"/Films/" + video.title} 
        className="Link">
          <motion.div 
            key={index}
            ref={ref}
            variants={filmVariant}
            initial="initial"
            transition={{
            type: 'spring',
            visualDuration: 0.2,
            damping: 10,
            stiffness: 100,
            mass: 0.7,
            bounce: 0.5
            }}
            onHoverStart={() => handlehoverplay(index)}
            onHoverEnd={() => handlehoverpause(index)}
            whileHover="hover"
            whileInView = { isSmallDevice ? "onscreen" : "" }
            viewport = {{ amount: 0.99 }}
            className="FilmContainer"
          >
            <motion.div variants={titleVariant}
            initial={{ textShadow: "0px 0px 20px #000000", opacity: 1 }} 
            whileHover={{ textShadow: "0px 0px 20px #000000", opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            key={index}
            className="FilmTitle">{video.title}</motion.div>
              <motion.div key={video.thumbnailvideo}> 
                <motion.video 
                ref={(node) => {
                const map = getMap();
                map.set(index, node);

                return () => {
                  map.delete(index);
                  };
                }}
                variants={thumbnailVariant} 
                key={video.src}
                preload="auto"
                initial={{ display: "none", opacity: 0 }} 
                whileHover={{ display: "flex", opacity: 1  }}
                onViewportLeave={() => handlepause(index)}
                onViewportEnter={() => handleplay(index)}
                onHoverStart={() => handlehoverplay(index)}
                onHoverEnd={() => handlehoverpause(index)}
                transition={{ duration: 0.5 }}
                poster={video.thumbnail}
                muted={isMuted.current} 
                loop className="thumbnailvideo">
                  <source src={video.thumbnailvideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </motion.video>
                <motion.img 
                  variants={maskVariant}
                  transition={{ duration: 0.2 }}
                  key={video.thumbnail}
                  src={video.thumbnail}
                  alt={video.title}
                  className="thumbnail"
                />
              </motion.div>
          </motion.div>
        </Link>
        ))}
      </div>
    </>
  );
}



export default Cinematography;
