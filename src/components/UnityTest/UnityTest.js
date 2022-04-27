import Unity, { UnityContext } from "react-unity-webgl";

const UnityTest = () => {
  const unityContext = new UnityContext({
    loaderUrl: "../../../unity/app.loader.js",
    dataUrl: "../../../unity/app.data",
    frameworkUrl: "../../../unity/app.framework.js",
    codeUrl: "../../../unity/app.wasm",
  });

  return (
    <div>
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
  );
};

export default UnityTest;