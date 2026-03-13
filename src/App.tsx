import About from "./About";
import Projects from "./Gallery/Projects";
import BGVideo from "./Video";
import Cinematography from "./Pages/cinematography";
import IndexPhotography from "./Pages/IndexPhotography";

function App() {
  return (
    <>
      <About />
      <div className="space" />
      <Cinematography />
      <div className="space" />
      <IndexPhotography />
      <div className="space" />
      <Projects />
      <div className="space" />
      <BGVideo />
    </>
  );
}

export default App;
