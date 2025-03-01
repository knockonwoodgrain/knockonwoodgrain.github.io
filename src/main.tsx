import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createHashRouter, RouterProvider } from "react-router-dom";
import "./index.css";

// Dynamically import all .tsx files in the current directory and in ./Pages
const modules = {
  ...import.meta.glob("./*.tsx"),           // Scan current directory
  ...import.meta.glob("./Pages/**/*.tsx"),  // Scan Pages directory and subfolders
};

// Debugging: Log generated modules for paths and elements
console.log("Available modules:", modules);

// Process imported modules into routes
const dynamicRoutes = Object.entries(modules).map(([path, module]) => {
  // Derive the route path from the file path
  let routePath = path
    .replace("./", "/")            // Ensure files in root (./) are mapped to /
    .replace(".tsx", "")           // Remove file extension
    .replace(/\/Pages/g, "");      // Remove the /Pages prefix

  // Debugging: Log both the original path and the final route
  console.log(`Original path: ${path} -> Final route: ${routePath}`);

  // Dynamically load the component using React.lazy
  //const Component = React.lazy(() => module().then(mod => ({ default: mod as React.ComponentType<any> })));
  const Component = React.lazy(async () => {
  const mod = await module() as { default: React.ComponentType<any> };
  if (!mod || !mod.default) {
    throw new Error(`Module ${path} does not have a default export.`);
  }
  return { default: mod.default as React.ComponentType<any> };
});

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
  },
];

// Add dynamic routes for photography projects
//const photographyRoutes = [
//  {
//    path: "/Photography",
//    element: (
//      <Suspense fallback={<div>Loading...</div>}>
//        <PhotosSelect />
//      </Suspense>
//    ),
//  },
//  {
//    path: "/Photography/:projectName",
//    element: (
//      <Suspense fallback={<div>Loading...</div>}>
//        <ProjectPage />
//      </Suspense>
//    ),
//  },
//];

// Combine static, dynamic, and photography routes
const router = createHashRouter([...staticRoutes, ...dynamicRoutes]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
