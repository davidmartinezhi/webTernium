import React, { useState, useEffect } from "react";
import Unity, { UnityContext } from "react-unity-webgl";
import NavBar from "./components/NavBar";
import Sider from "./components/Sider";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

const unityContext = new UnityContext({
  loaderUrl: "../unity/app.loader.js",
  dataUrl: "../unity/app.data",
  frameworkUrl: "../unity/app.framework.js",
  codeUrl: "../unity/app.wasm",
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
