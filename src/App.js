import React, { useState, useEffect } from "react";
import Unity, { UnityContext } from "react-unity-webgl";
import NavBar from "./components/NavBar";
import ModalAlert from "./components/ModalAlert";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import ModalAnimation from "./components/ModalAnimation";

const unityContext = new UnityContext({
  loaderUrl: "../unity/MapadeCalor.loader.js",
  dataUrl: "../unity/MapadeCalor.data",
  frameworkUrl: "../unity/MapadeCalor.framework.js",
  codeUrl: "../unity/MapadeCalor.wasm",
});

function App() {
  const [isVisibleAlert, setIsVisibleAlert] = useState(false);
  const [isVisibleAnimation, setIsVisibleAnimation] = useState(false);
  const [alert, setAlert] = useState({});

  //Change Filters On Heatmap
  const unityFilterController = (filter) => {
    unityContext.send("JSHandler", "SetFiltros", filter);
    console.log("Unity filter controller...");
  };

  //Change areas on heatmap
  const unityAreaController = (area) => {
    
    unityContext.send("JSHandler", "SetArea", area);
    console.log("Unity area controller...");
  };

  //Desploy animation
  const deployAnimation = () => {
    setIsVisibleAnimation(true);
    console.log("Animation Desployed...");
  }


  //Alert detection
  useEffect(() => {
    unityContext.on("SendAlert", (unityAlert) => {
      setAlert({unityAlert});
      setIsVisibleAlert(true);
    })
    setAlert({});
  }, []);


  return (
    <>
      <div className="header">
        <NavBar filterController={unityFilterController} unityAreaController={unityAreaController} deployAnimation={deployAnimation}/>
      </div>
      <div className="content">
        <Unity
          unityContext={unityContext}
          style={{
            position: "fixed",
            height: "100vh",
            width: "100%",
            overflow: "visible",
            margin: "0 auto",
            display: "flex",
          }}
        />
        <ModalAlert alert={alert} setIsVisible={setIsVisibleAlert} isVisible={isVisibleAlert} />
        <ModalAnimation setIsVisible={setIsVisibleAnimation} isVisible={isVisibleAnimation}/>
      </div>
    </>
  );
}

export default App;
