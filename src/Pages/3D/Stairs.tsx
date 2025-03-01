        import Project from "../Project";

        const Pages = {
          title: "Stairs",
          text: "There's a lady who's sure all that glitters is gold.\nAnd she's buying a stairway to Heaven",
          layout: "PresentationScrolling",
          Content: [
  "3D/Stairs/Stairs.webm"
],
          category: "Led Zeppelin",
          video: true,
        };

        function Stairs() {
          return <Project {...Pages} />;
        }

        export default Stairs;
