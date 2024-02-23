import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import VDKSelect from "./Pages/VDK Selection.tsx";
import { createHashRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import VDKOne from "./Pages/VDK 1.tsx";
import VDKTwo from "./Pages/VDK 2.tsx";
import Mindset from "./Pages/Mindset.tsx";
import Spectrum from "./Pages/Spectrum.tsx";
import Untitled from "./Pages/Untitled.tsx";
import Postember from "./Pages/Postember.tsx";
import UX from "./Pages/UX.tsx";
import IGOR from "./Pages/IGOR.tsx";
import CampFlogGnaw from "./Pages/CFG.tsx";
import PhotosSelect from "./Pages/Photography/Photography Select.tsx";
import Pongal from "./Pages/Photography/Pongal.tsx";
import Optikal from "./Pages/Photography/Optikal.tsx";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/VDK HBPT RUX",
    element: <VDKSelect />,
  },
  {
    path: "/VDK HBPT RUX/VDK HBPT RUX 1",
    element: <VDKOne />,
  },
  {
    path: "/VDK HBPT RUX/VDK HBPT RUX 2",
    element: <VDKTwo />,
  },
  {
    path: "/Mindset",
    element: <Mindset />,
  },
  {
    path: "/Spectrum",
    element: <Spectrum />,
  },
  {
    path: "/Untitled",
    element: <Untitled />,
  },
  {
    path: "/Postember",
    element: <Postember />,
  },
  {
    path: "/UX Portfolio",
    element: <UX />,
  },
  {
    path: "/IGOR",
    element: <IGOR />,
  },
  {
    path: "/CFG Branding",
    element: <CampFlogGnaw />,
  },
  {
    path: "/Photography",
    element: <PhotosSelect />,
  },
  {
    path: "/Photography/Pongal",
    element: <Pongal />,
  },
  {
    path: "/Photography/Optikal Asylum",
    element: <Optikal />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
