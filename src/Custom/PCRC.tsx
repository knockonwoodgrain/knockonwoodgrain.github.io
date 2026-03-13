import AboutCustom from "./AboutCustom";
import Projects from ".././Gallery/Projects";
import BGVideo from ".././Video";
import Cinematography from ".././Pages/cinematography";
import IndexPhotography from ".././Pages/IndexPhotography";
import customData from "./customData.json"

function App() {
  return (
    <>
      <AboutCustom aboutData={{ title: "KnockOnWoodGrain", para:customData[1].para, svg:"PCRC" }}/>
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
