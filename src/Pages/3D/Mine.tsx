        import Project from "../Project";

        const Pages = {
          title: "Mine",
          text: "How come the ecstasy always depresses me so?,\nChemically, I don't have no more new places to go",
          layout: "ZineScrolling",
          Content: [
  "3D/Mine/Mine.webp"
],
          category: "Frank Ocean",
          video: false,
        };

        function Mine() {
          return <Project {...Pages} />;
        }

        export default Mine;
