        import Project from "../Project";

        const Pages = {
          title: "Coffee",
          text: "Coffee to keep your lips warm, prototype for a cup that tells you the temperature",
          layout: "ZineScrolling",
          Content: [
  "3D/Coffee/CofeeEdited.mp4"
],
          category: "Product",
          video: true,
        };

        function Coffee() {
          return <Project {...Pages} />;
        }

        export default Coffee;
