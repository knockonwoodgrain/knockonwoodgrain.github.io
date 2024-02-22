import About from "./About";
import Projects from "./Gallery/Projects";
import Gallery from "./Gallery/Gallery";
import BGVideo from "./Video";

function App() {
  return (
    <>
      <About />
      <div className="space" />
      <Projects />
      <Gallery />
      <BGVideo />
    </>
  );
}

export default App;
