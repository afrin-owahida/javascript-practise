import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import Ifelse from "./practice/Ifelse";

function App() {
  function salary(num) {
    if (0 > num) {
      console.log("invalid");
    } else if (0 <= num && 50000 > num) {
      console.log(num);
    } else if (50000 <= num && 100000 >= num) {
      console.log(num - num * 0.1);
    } else if (100000 < num) {
      console.log(num - num * 0.15);
    } else {
      console.log("nothing can found");
    }
  }
  useEffect(() => {
    salary(100001);
  }, []);

  return <div>{/* <Ifelse/> */}</div>;
}

export default App;
//negative means invallid, 0-50k no tax, 50-100k 10%, 100k er upor 15%
