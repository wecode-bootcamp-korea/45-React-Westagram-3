import { useState, useEffect } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("1");
  }, [name, count]);

  console.log("3");
  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        숫자증가
      </button>
      <input
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
    </>
  );
};
export default App;
