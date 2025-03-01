        import Project from "../Project";

        const Pages = {
          title: "KID A",
          text: "KID A album cover recreation, done in blender by accident",
          layout: "ZineScrolling",
          Content: [
  "3D/KID A/KIDA.png",
  "3D/KID A/KIDA.webp"
],
          category: "Experiment",
          video: false,
        };

        function KIDA() {
          return <Project {...Pages} />;
        }

        export default KIDA;
