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
      <p>UseLayoutEffect will calls before useEffect </p>
      <input ref={inputRef} value="UseLayoutEffect"  style={{ width: 400, height: 60 }} />
    </div>
  );
}

export default LayoutEffectTutorial;
