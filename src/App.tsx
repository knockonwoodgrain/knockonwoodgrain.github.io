import About from "./About";
import Projects from "./Gallery/Projects";
import Gallery from "./Gallery/Gallery";
import BGVideo from "./Video";
import Cinematography from "./Pages/cinematography";
import IndexPhotography from "./Pages/IndexPhotography";

function App() {
  return (
    <>
      <About />
      <div className="space" />
      <Cinematography />
      <IndexPhotography />
      <Projects />
      <Gallery />
      <div className="space" />
      <BGVideo />
    </>
  );
}

export default App;
