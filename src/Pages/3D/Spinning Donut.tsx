        import Project from "../Project";

        const Pages = {
          title: "Spinning Donut",
          text: "I was just trying to learn geometry nodes",
          layout: "ZineScrolling",
          Content: [
  "3D/Spinning Donut/Trip.webm"
],
          category: "Geo Nodes",
          video: true,
        };

        function SpinningDonut() {
          return <Project {...Pages} />;
        }

        export default SpinningDonut;
