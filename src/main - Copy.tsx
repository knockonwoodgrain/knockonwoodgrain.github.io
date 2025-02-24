import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import PhotosSelect from "./Pages/Photography.tsx";
import { createHashRouter, RouterProvider } from "react-router-dom";
import "./index.css";

//Dynamically import all .tsx files in the current directory and in ./Pages
const modules = {
  ...import.meta.glob("./*.tsx"),           // Scan current directory
  ...import.meta.glob("./Pages/**/*.tsx"),  // Scan Pages directory and subfolders
};

// Debugging: Log generated modules for paths and elements
console.log("Available modules:", modules);

//const routeMappings: Record<string, React.ComponentType> = {
//  "/VDK HBPT RUX": VDKSelect,
//  "/VDK HBPT RUX/VDK HBPT RUX 1": VDKOne,
//  "/VDK HBPT RUX/VDK HBPT RUX 2": VDKTwo,
//};

// Process imported modules into routes
const dynamicRoutes = Object.entries(modules).map(([path, module]) => {
  // Derive the route path from the file path
  let routePath = path
    .replace("./", "/")            // Ensure files in root (./) are mapped to /
    .replace(".tsx", "")           // Remove file extension
    .replace(/\/Pages/g, "")       // Remove the /Pages prefix

  // Debugging: Log both the original path and the final route
  console.log(`Original path: ${path} -> Final route: ${routePath}`);

  // Dynamically load the component using React.lazy
  const Component = React.lazy(module);

  return {
    path: routePath,
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Component />
      </Suspense>
    ),
  };
});

// Static routes (if needed)
const staticRoutes = [
  {
    path: "/",
    element: <App />,
  },
  // Fallback route for unmatched paths
  {
    path: "*",
    element: <div>404: Page Not Found</div>,
  }
];


// Add dynamic routes for photography projects
const photographyRoutes = [
  {
    path: "/Photography",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <PhotosSelect />
      </Suspense>
    ),
  },
  {
    path: "/Photography/:projectName",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <ProjectPage />
      </Suspense>
    ),
  },
];

// Combine static and dynamic routes
const router = createHashRouter([...staticRoutes, ...dynamicRoutes, ...photographyRoutes]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

//import VDKOne from "./Pages/VDK 1.tsx";
//import VDKTwo from "./Pages/VDK 2.tsx";
//import Mindset from "./Pages/Mindset.tsx";
//import Spectrum from "./Pages/Spectrum.tsx";
//import Untitled from "./Pages/Untitled.tsx";
//import Postember from "./Pages/Postember.tsx";
//import UX from "./Pages/UX Portfolio.tsx";
//import IGOR from "./Pages/IGOR.tsx";
//import CampFlogGnaw from "./Pages/CFG Branding.tsx";
//import PhotosSelect from "./Pages/Photography/Photography.tsx";
//import Pongal from "./Pages/Photography/Pongal.tsx";
//import Optikal from "./Pages/Photography/Optikal.tsx";
//import PhotowalkJ from "./Pages/Photography/Photowalk J.tsx";
//import SufiNite from "./Pages/Photography/SufiNite.tsx";
//import DarktableFun from "./Pages/Photography/DarktableFun.tsx";
//import SkateBoy from "./Pages/Photography/SkateBoy.tsx";
//import ThreeDSelect from "./Pages/3D/3D.tsx";
//import AllInOne from "./Pages/3D/All In One.tsx";
//import Coffee from "./Pages/3D/Coffee.tsx";
//import Phone from "./Pages/3D/Phone.tsx";
//import VDKAnim from "./Pages/3D/VDK Anim.tsx";
//import Stairs from "./Pages/3D/Stairs.tsx";
//import PinkFloyd from "./Pages/3D/Pink Floyd.tsx";
//import Dream from "./Pages/3D/Dream.tsx";
//import KIDA from "./Pages/3D/KID A.tsx";
//import Mine from "./Pages/3D/Mine.tsx";
//import Naked from "./Pages/3D/Naked.tsx";
//import NYQuickstep from "./Pages/3D/NY Quickstep.tsx";
//import ArchiveSelect from "./Pages/Archive/ArchiveSelect.tsx";
//import VDKSelect from "./Pages/VDK Selection.tsx";
//
//const router = createHashRouter([
//  {
//    path: "/",
//    element: <App />,
//  },
//  {
//    path: "/VDK HBPT RUX",
//    element: <VDKSelect />,
//  },
//  {
//    path: "/VDK HBPT RUX/VDK HBPT RUX 1",
//    element: <VDKOne />,
//  },
//  {
//    path: "/VDK HBPT RUX/VDK HBPT RUX 2",
//    element: <VDKTwo />,
//  },
//  {
//    path: "/Mindset",
//    element: <Mindset />,
//  },
//  {
//    path: "/Spectrum",
//    element: <Spectrum />,
//  },
//  {
//    path: "/Untitled",
//    element: <Untitled />,
//  },
//  {
//    path: "/Postember",
//    element: <Postember />,
//  },
//  {
//    path: "/UX Portfolio",
//    element: <UX />,
//  },
//  {
//    path: "/IGOR",
//    element: <IGOR />,
//  },
//  {
//    path: "/CFG Branding",
//    element: <CampFlogGnaw />,
//  },
//  {
//    path: "/Photography",
//    element: <PhotosSelect />,
//  },
//  {
//    path: "/Photography/Pongal",
//    element: <Pongal />,
//  },
//  {
//    path: "/Photography/Optikal Asylum",
//    element: <Optikal />,
//  },
//  {
//    path: "/Photography/Photowalk J",
//    element: <PhotowalkJ />,
//  },
//  {
//    path: "/Photography/SufiNite",
//    element: <SufiNite />,
//  },
//  {
//    path: "/Photography/Darktable Fun",
//    element: <DarktableFun />,
//  },
//  {
//    path: "/Photography/SkateBoy",
//    element: <SkateBoy />,
//  },
//  {
//    path: "/3D",
//    element: <ThreeDSelect />,
//  },
//  {
//    path: "/3D/All In One",
//    element: <AllInOne />,
//  },
//  {
//    path: "/3D/Coffee",
//    element: <Coffee />,
//  },
//  {
//    path: "/3D/Phone",
//    element: <Phone />,
//  },
//  {
//    path: "/3D/VDK Anim",
//    element: <VDKAnim />,
//  },
//  {
//    path: "/3D/Stairs",
//    element: <Stairs />,
//  },
//  {
//    path: "/3D/Pink Floyd",
//    element: <PinkFloyd />,
//  },
//  {
//    path: "/3D/Dream",
//    element: <Dream />,
//  },
//  {
//    path: "/3D/KID A",
//    element: <KIDA />,
//  },
//  {
//    path: "/3D/Mine",
//    element: <Mine />,
//  },
//  {
//    path: "/3D/Naked",
//    element: <Naked />,
//  },
//  {
//    path: "/3D/NY Quickstep",
//    element: <NYQuickstep />,
//  },
//  {
//    path: "/Archive",
//    element: <ArchiveSelect />,
//  },
//]);
//
//ReactDOM.createRoot(document.getElementById("root")!).render(
//  <React.StrictMode>
//    <RouterProvider router={router} />
//  </React.StrictMode>
//);
