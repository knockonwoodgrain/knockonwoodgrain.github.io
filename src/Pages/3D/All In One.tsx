        import Project from "../Project";

        const Pages = {
          title: "All In One",
          text: "All of the renders I did previously in one",
          layout: "ZineScrolling",
          Content: [
  "3D/All In One/AllInOneFinal.mp4"
],
          category: "Animation",
          video: true,
        };

        function AllInOne() {
          return <Project {...Pages} />;
        }

        export default AllInOne;
