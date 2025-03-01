        import Project from "../Project";

        const Pages = {
          title: "Untitled Unmastered",
          text: "I had a dream about this house, and so I made it",
          layout: "PresentationScrolling",
          Content: [
  "3D/Untitled Unmastered/untitled3Edited.webp",
  "3D/Untitled Unmastered/untitled4Edited.webp"
],
          category: "House",
          video: false,
        };

        function UntitledUnmastered() {
          return <Project {...Pages} />;
        }

        export default UntitledUnmastered;
