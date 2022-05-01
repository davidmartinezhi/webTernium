import React, { useState, useEffect } from "react";
import Unity, { UnityContext } from "react-unity-webgl";
import NavBar from "./components/NavBar";
import Sider from "./components/Sider";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

const unityContext = new UnityContext({
  loaderUrl: "../unity/intento2Mouse.loader.js",
  dataUrl: "../unity/intento2Mouse.data",
  frameworkUrl: "../unity/intento2Mouse.framework.js",
  codeUrl: "../unity/intento2Mouse.wasm",
});

function App() {
  //Change Filters On Heatmap
  const unityFilterController = (filter) => {
    unityContext.send("JSHandler", "RecibeWeb", filter);
    console.log("Unity filter controller...");
  };

  //Change areas on heatmap
  const unityAreaController = (area) => {
    console.log(area);
    //unityContext.send("JSHandler", "RecibeWeb", area);
  };

  return (
    <>
      <div className="header">
        <NavBar filterController={unityFilterController} />
      </div>

      <div className="content">
        <Unity
          unityContext={unityContext}
          style={{
            position: "fixed",
            height: "100vh",
            width: "100%",
            overflow: "hidden",
            margin: "0 auto",
            display: "flex",
          }}
        />
      </div>
    </>
  );
}

export default App;
