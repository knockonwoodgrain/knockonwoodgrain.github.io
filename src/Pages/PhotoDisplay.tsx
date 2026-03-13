import { useState, useRef, useEffect } from "react";
import BackButtonUniversal from "./BackButtonUniversal";
import Markdown from "react-markdown";

function PhotoDisplay({ photodata }: { photodata: { title: string; thumbnail: string; img: Array<{src: string, srcDesc: string}>; categories: Array<string> } }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToImage = (direction: "left" | "right") => {
  if (!scrollRef.current) return;
  
  const newIndex = direction === "right"
    ? Math.min(currentIndex + 1, photodata.img.length - 1)
    : Math.max(currentIndex - 1, 0);


  const imageElement = scrollRef.current.children[newIndex] as HTMLElement;
  imageElement?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });

  // No need to set `currentIndex` manually, let `useEffect` handle it
  };

  const scrollToSpecificImage = (index: number) => {
  if (!scrollRef.current) return;
  
  const imageElement = scrollRef.current.children[index] as HTMLElement;
  imageElement?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });

  }

  
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      const scrollLeft = scrollContainer.scrollLeft;
      const childWidth = scrollContainer.scrollWidth / photodata.img.length;
      const newIndex = Math.round(scrollLeft / childWidth);

      setCurrentIndex(newIndex);
    };

    scrollContainer.addEventListener("scroll", handleScroll);
    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, []);

 return (
    <>
    <div className="PhotoDisplayContainer" >
      <div className={`BackButtonOnVideo`}>
        <BackButtonUniversal box={false} white text={"KnockOnWoodGrain"} />
      </div>
      <button className="nav-btn left" onClick={() => scrollToImage("left")} >
       <svg xmlns="http://www.w3.org/2000/svg" className="nav-btn-svg" viewBox="0 -960 960 960"><path d="m411.74-481 174.13 174.13q10.2 10.2 9.7 23.87-.5 13.67-10.7 23.87-10.2 10.2-24.37 10.2-14.17 0-24.37-10.2L338.37-456.89q-5.48-5.48-7.96-11.44-2.48-5.95-2.48-12.67t2.48-12.67q2.48-5.96 7.96-11.44l198.76-198.76q10.2-10.2 24.37-10.2 14.17 0 24.37 10.2 10.2 10.2 10.2 24.37 0 14.17-10.2 24.37L411.74-481Z"/></svg>
      </button>
        <div className="PhotoScroll" ref={scrollRef}>
        {photodata.img.map((img, index) => (
          <div 
            key={index}
            className="ImageBleed">
            <img
              loading="eager"
              className="PhotoDisplayImage"
              key={index}
              src={img.src}
            />
            <div className="PhotoDisplayCaption">
              <Markdown>
              {img.srcDesc}
              </Markdown>
            </div>
          </div>
          ))}
        </div>
      <button className="nav-btn right" onClick={() => scrollToImage("right")} >
        <svg xmlns="http://www.w3.org/2000/svg" className="nav-btn-svg" viewBox="0 -960 960 960"><path d="m524.26-481-198-198L375-727.74 621.74-481 375-234.26 326.26-283l198-198Z"/></svg>
      </button>
      <div className="dotContainer">
      {photodata.img.map((img, index) => (
        <span key={img.src} className={currentIndex == index ? "dotActive" 
          : currentIndex > index + 2 ? "dotInactive" 
          : currentIndex < index - 2 ? "dotInactive" 
          : currentIndex > index + 1 ? "dotlessActive" 
          : currentIndex < index - 1 ? "dotlessActive" 
          : "dot"} onClick={() => scrollToSpecificImage(index)} />
      ))}
      </ div>
      <div className="PhotoCounter"><div>{currentIndex + 1}</div>  · <div style={{opacity: 0.5}}> {photodata.img.length} </ div></ div>
    </div>
    </>
 );
}

export default PhotoDisplay;
