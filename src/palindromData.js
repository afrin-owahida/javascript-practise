import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import Ifelse from "./practice/Ifelse";

function App() {
  let soja = ["a", "c", "b", "a"];
  let ulta = [];
  let matched = true;
  useEffect(() => {
    for (let i = soja.length - 1; i >= 0; i--) {
      ulta.push(soja[i]);
    }

    for (let i = 0; i < ulta.length; i++) {
      if (soja[i] != ulta[i]) {
        matched = false;
      }
    }
    console.log(matched);
  }, []);

  return <div>{/* <Ifelse/> */}</div>;
}

export default App;
//negative means invallid, 0-50k no tax, 50-100k 10%, 100k er upor 15%
