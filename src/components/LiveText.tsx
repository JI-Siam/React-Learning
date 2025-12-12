import { useState } from "react";

function LiveText() {
  const [inputText, setInputText] = useState("");
  const charCount = inputText.length;

  return (
    <div>
      <input
        type="text"
        size={30}
        placeholder="Enter you text here"
        onChange={(e) => setInputText(e.currentTarget.value)}
      />
      <p>Your Input Character Count is : {charCount}</p>
    </div>
  );
}

export default LiveText;
