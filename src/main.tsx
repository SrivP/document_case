import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import About from "./components/About.tsx";
import Projects from "./components/Projects.tsx";
import Nav from "./components/Nav.tsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
// Supports weights 400-700
import "@fontsource-variable/libre-baskerville/wght-italic.css";
// Supports weights 100-900
import "@fontsource-variable/inter/wght.css";
import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ShaderGradientCanvas
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "100vh",
        width: "100vw",
        pointerEvents: "none",
        zIndex: 0,
      }}
      pixelDensity={1.5}
      fov={45}
    >
      <ShaderGradient
        animate="on"
        axesHelper="off"
        brightness={1.2}
        cAzimuthAngle={180}
        cDistance={2.9}
        cPolarAngle={120}
        cameraZoom={1}
        color1="#FFF5EB"
        color2="#FCD1A6"
        color3="#F1F1F1"
        destination="onCanvas"
        embedMode="off"
        envPreset="city"
        format="gif"
        fov={45}
        frameRate={10}
        gizmoHelper="hide"
        grain="off"
        lightType="3d"
        pixelDensity={1}
        positionX={0}
        positionY={1.8}
        positionZ={0}
        range="disabled"
        rangeEnd={40}
        rangeStart={0}
        reflection={0.1}
        rotationX={0}
        rotationY={0}
        rotationZ={-90}
        shader="defaults"
        type="waterPlane"
        uAmplitude={0}
        uDensity={1}
        uFrequency={5.5}
        uSpeed={0.3}
        uStrength={3}
        uTime={0.2}
        wireframe={false}
      />
    </ShaderGradientCanvas>
    <RouterProvider router={router} />,
  </StrictMode>,
);
