        import Project from "../Project";

        const Pages = {
          title: "Dark Side",
          text: "A recreation of the prism from the cover of 'Dark Side Of The Moon' by Pink Floyd",
          layout: "ZineScrolling",
          Content: [
  "3D/Dark Side/DarkSideOfTheMoon.webp",
  "3D/Dark Side/Pink Floyd.webp"
],
          category: "Experiment",
          video: false,
        };

        function DarkSide() {
          return <Project {...Pages} />;
        }

        export default DarkSide;
