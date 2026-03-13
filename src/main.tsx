import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createHashRouter, RouterProvider } from "react-router-dom";
import "./index.css";

// Dynamically import all .tsx files in the current directory and in ./Pages
const modules = {
  ...import.meta.glob("./*.tsx"),           // Scan current directory
  ...import.meta.glob("./Pages/**/*.tsx"),  // Scan Pages directory and subfolders
  ...import.meta.glob("./Custom/**/*.tsx"),  // Scan Pages directory and subfolders
};

// Debugging: Log generated modules for paths and elements
console.log("Available modules:", modules);

// Process imported modules into routes
const dynamicRoutes = Object.entries(modules).map(([path, module]) => {
  // Derive the route path from the file path
  let routePath = path
    .replace("./", "/")            // Ensure files in root (./) are mapped to /
    .replace(".tsx", "")           // Remove file extension
    .replace(/\/Pages/g, "")      // Remove the /Pages prefix
    .replace(/\/Custom/g, "");      // Remove the /Custom prefix

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
      <Suspense fallback={<div className="Loading">Dreaming a thought that could dream about a thought <br />
      That could think of the dreamer that thought <br />
      That could think of dreaming and getting a glimmer of God <br />
      I be dreaming a dream in a thought <br />
      That could dream about a thought <br />
      That could think of dreaming a dream <br />
      Where I cannot, where I cannot <br />
      <br />
      Less morose and more present <br />
      Dwell on my gifts for a second <br />
      A moment one solar flare would consume, so why not <br />
      Spin this flammable paper on the film that's my life <br />
      High flights, inhale the vapor, exhale once and think twice <br />
      Eat some shrooms, maybe have a good cry, about you <br />
      See some colors, light hang glide off the moon</div>}>
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

const router = createHashRouter([...staticRoutes, ...dynamicRoutes]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
