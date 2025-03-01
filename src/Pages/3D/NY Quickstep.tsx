        import Project from "../Project";

        const Pages = {
          title: "NY Quickstep",
          text: "A very original perfume concept, not inspired by French Waltz",
          layout: "ZineScrolling",
          Content: [
  "3D/NY Quickstep/NYQuickstepNewEdited.webp"
],
          category: "Product",
          video: false,
        };

        function NYQuickstep() {
          return <Project {...Pages} />;
        }

        export default NYQuickstep;
