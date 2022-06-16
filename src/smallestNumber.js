import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import Ifelse from "./practice/Ifelse";

function App() {
  var arr = [10, 2, 5, 0, 12, 3, 1];
  let smallest = arr[0];
  useEffect(() => {
    for (let i = 0; i < arr.length; i++) {
      if (smallest > arr[i]) {
        smallest = arr[i];
      }
    }
  }, []);

  return <div>{/* <Ifelse/> */}</div>;
}

export default App;
//negative means invallid, 0-50k no tax, 50-100k 10%, 100k er upor 15%
