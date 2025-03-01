        import Project from "../Project";

        const Pages = {
          title: "Phone",
          text: "I had a broken phone, so I thought atleast I can day dream",
          layout: "ZineScrolling",
          Content: [
  "3D/Phone/Phone1.mp4"
],
          category: "Product",
          video: true,
        };

        function Phone() {
          return <Project {...Pages} />;
        }

        export default Phone;
