import React, { useState } from "react";
import ScannerCamera from "./ScannerCamera";

function Scanner() {
  const [camera, setCamera] = useState(false);
  const [result, setResult] = useState(null);

  const onDetected = result => {
    setResult(result);
  };

  return (
    <div className="ScannerApp">
      <p>{result ? result : "Scanning..."}</p>
      <button onClick={() => setCamera(!camera)}>
        {camera ? "Stop" : "Start"}
      </button>
      <div className="container">
        {camera && <ScannerCamera onDetected={onDetected} />}
      </div>
    </div>
  );
}

export default Scanner;