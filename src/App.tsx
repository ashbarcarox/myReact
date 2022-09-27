import React, { useRef } from 'react';
import './App.css';
import { useScreenshot } from "use-screenshot-hook";


function App() {
  const ref = useRef(null);
  const { image, takeScreenshot, isLoading, clear } = useScreenshot({ref:ref});
  return (
    <div className="App">
      <header className="App-header">
        Testing Screen Capture
        <div> <h1> ARI</h1>Sample data below:
        <div ref = {ref}>
          This is example data to test screen capture
        </div>
        <button onClick={() => takeScreenshot()} style = {{}}>Capture</button>

        </div>

        {image && (
        <div className="imageContainer" style = {{border: '2px solid red'}}>
          <img width = {600} src={image}/>
          <button onClick={clear}> Close </button>
        </div>
      )}
      </header>
    </div>
  );
}

export default App;
