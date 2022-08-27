import "./App.css";
import QRCode from "react-qr-code";
import { useState } from "react";
function App() {
  const [textToShare, setTextToShare] = useState(
    "Stéphan is the best. utf-8 is hard"
  );
  return (
    <div className="App">
      <h1>the <i>Shary</i> on the cake</h1>
      <QRCode value={textToShare}></QRCode>

      <textarea
        style={{width: "80%"}}
        rows="15"
        onChange={(c) => setTextToShare(c.target.value)}
        value={textToShare}
      ></textarea>

      <p>Type/Paste your content, point your telephone at the screen that's it.</p>
    </div>
  );
}

export default App;
