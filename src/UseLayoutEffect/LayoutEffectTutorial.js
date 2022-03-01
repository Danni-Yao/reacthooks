import { useLayoutEffect, useEffect, useRef } from "react";

function LayoutEffectTutorial() {
  const inputRef = useRef(null);

  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);

  useEffect(() => {
    inputRef.current.value = "HELLO";
  }, []);

  return (
    <div className="App">
      <hr></hr>
      <h3>UseLayoutEffect Hook example:</h3>
      <input ref={inputRef} value="UseLayoutEffect" placeholder="..." style={{ width: 400, height: 60 }} />
    </div>
  );
}

export default LayoutEffectTutorial;