import React, { useState, useEffect } from "react";
import Unity, { UnityContext } from "react-unity-webgl";
import NavBar from "./components/NavBar";
import Modal from "./components/Modal";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

const unityContext = new UnityContext({
  loaderUrl: "../unity/MapadeCalor.loader.js",
  dataUrl: "../unity/MapadeCalor.data",
  frameworkUrl: "../unity/MapadeCalor.framework.js",
  codeUrl: "../unity/MapadeCalor.wasm",
});

function App() {
  const [isVisible, setIsVisible] = useState(true);
  const [alert, setAlert] = useState({});

  //Change Filters On Heatmap
  const unityFilterController = (filter) => {
    unityContext.send("JSHandler", "setfiltros", filter);
    console.log("Unity filter controller...");
  };

  //Change areas on heatmap
  const unityAreaController = (area) => {
    
    unityContext.send("JSHandler", "SetArea", area);
    console.log("Unity area controller...");
  };

  //Alert detection
  // useEffect(() => {
  //   unityContext.on("SendAlert", (unityAlert) => {
  //     setAlert({unityAlert});
  //     setIsVisible(true);
  //   })
  //   setAlert({});
  // }, []);

  return (
    <>
      <div className="header">
        <NavBar filterController={unityFilterController} unityAreaController={unityAreaController} />
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
        {/* <Modal alert={alert} setIsVisible={setIsVisible} isVisible={isVisible} /> */}
      </div>
    </>
  );
}

export default App;
