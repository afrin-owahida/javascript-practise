import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import Ifelse from "./practice/Ifelse";
function App() {
  var fib = [0, 1];
  useEffect(() => {
    for (let i = 2; i < 12; i++) {
      // fib[i] = fib[i - 1] + fib[i - 2];
      fib.push(fib[i - 1] + fib[i - 2])
    }
    console.log(fib);
  }, []);

  return <div></div>;
}

export default App;
//negative means invallid, 0-50k no tax, 50-100k 10%, 100k er upor 15%
