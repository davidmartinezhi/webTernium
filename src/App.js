import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import UnityTest from './components/UnityTest/UnityTest';
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <div className='header'>

      <NavBar />
      </div>
      
      <div className='content'>
      <UnityTest />
      </div>
    </>
  );
}

export default App;
