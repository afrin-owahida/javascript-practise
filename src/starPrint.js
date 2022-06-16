import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import Ifelse from "./practice/Ifelse";

function App() {
  let n = 5;
  useEffect(() => {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < i; j++) {
        console.log("-");
        for (let k = 0; k < j; k++) {
          console.log("*");
          
        }
      }
    }
  }, []);

  return <div>{/* <Ifelse/> */}</div>;
}

export default App;
//negative means invallid, 0-50k no tax, 50-100k 10%, 100k er upor 15%
