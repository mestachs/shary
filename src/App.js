import "./App.css";
import QRCode from "react-qr-code";
import { useState } from "react";
function App() {
  let params = (new URL(document.location)).searchParams;
  const [textToShare, setTextToShare] = useState(params.get("q") || 
    "https://mestachs.github.io/shary/?q=Stéphan is the best. utf-8 is hard"
  );
  return (
    <div className="App">
      <h1>
        The <i style={{ color: "#D2042D" }}>Shary</i> on the cake
      </h1>
      <div>
      <p>Want to share text or url from your laptop to your mobile ?</p>
      <p>Type/Paste your content, point your telephone camera at the screen that's it.</p>
      <p>It's generally safe. The data is only in your browser and on your screen. Just don't let people screenshot your screen</p>
      </div>
      <QRCode value={textToShare}></QRCode>

      <textarea
        rows="15"
        cols="120"
        onChange={(c) => setTextToShare(c.target.value)}
        value={textToShare}
      ></textarea>
    </div>
  );
}

export default App;
