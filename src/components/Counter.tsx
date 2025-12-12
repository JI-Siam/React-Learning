import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count : {count}</p>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => setCount(count + 1)}
      >
        Click
      </button>
    </div>
  );
}

export default Counter;
