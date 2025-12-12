import { useState } from "react";

function ToggleBox() {
  const [mode, setMode] = useState(false);

  return (
    <>
      <div style={{ backgroundColor: mode ? "gray" : "black" }}>Box</div>

      {mode ? (
        <button
          type="button"
          className="btn btn-light"
          onClick={() => setMode(!mode)}
        >
          Light
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-dark"
          onClick={() => setMode(!mode)}
        >
          Dark
        </button>
      )}
    </>
  );
}

export default ToggleBox;
