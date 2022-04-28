import React, { useState, useEffect } from "react";
import Unity, { UnityContext } from "react-unity-webgl";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

const unityContext = new UnityContext({
  loaderUrl: "../unity/app.loader.js",
  dataUrl: "../unity/app.data",
  frameworkUrl: "../unity/app.framework.js",
  codeUrl: "../unity/app.wasm",
});

function App() {

  
  const [activeFilter, setActiveFilter] = useState(3);

  //Change Filters On Heatmap
  const unityFilterController = (filter) => {
    if(filter === 3){
      setActiveFilter(3);
    }
    else{
      setActiveFilter(5);
    }
    unityContext.send("JSHandler", "RecibeWeb", activeFilter);
    console.log("Unity filter controller...");
  };

  useEffect( () => {
    unityContext.on(activeFilter === 3 || activeFilter === 5, () => {
      unityContext.send("JSHandler", "Recibeweb", activeFilter);
    })
  },[activeFilter])


  //Change areas on heatmap
  const unityAreaController = (area) => {
    console.log(area);
    //unityContext.send("JSHandler", "RecibeWeb", area);
  };  


  return (
    <>
      <div className="header">
        <NavBar filterController={unityFilterController}/>
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
