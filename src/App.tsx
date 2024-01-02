import { useState } from "react";
import { deBounce, randomKey } from "./function";
import "./App.css";

function App() {
  const [genKey, setGeneKey] = useState("");
  const [deBouce, setDeBouce] = useState("");

  function handlingClick() {
    const key = randomKey();
    setGeneKey(key);
  }
  const handlingdeBounce = deBounce(() => {
    const ran = randomKey();
    setDeBouce(ran);
  }, 5000);
  return (
    <>
      <h1>Comprueba las funciones deBounce!!</h1>
      <p>La función llama inmediatamente al genKey()</p>
      <div className="card">
        <button className="genButt" onClick={handlingClick}>
          Generate Key inmediately
        </button>
        <button className="genKey">{genKey}</button>
      </div>
      <p>
        Las funciones solo la llama cuando se cumple el timepo de inacción:
        5000ms
      </p>
      <div className="card">
        <button className="genButt" onClick={handlingdeBounce}>
          Generate Key w/ deBounce
        </button>
        {genKey != "" && <button className="genKey">{deBouce}</button>}
      </div>
    </>
  );
}

export default App;
