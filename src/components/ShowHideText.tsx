import { useState } from "react";

function ShowHideText() {
  const [mode, setMode] = useState(false);
  return (
    <div>
      {mode ? (
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setMode(!mode)}
        >
          Hide
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setMode(!mode)}
        >
          Show
        </button>
      )}
      {mode ? <p>This is the text</p> : null}
    </div>
  );
}
export default ShowHideText;
