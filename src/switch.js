import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import Ifelse from "./practice/Ifelse";
function App() {
  var x = 5;
  var y = 7;
  // x = x + y;
  // x = x + y;
  // y = x-y;
  [x, y] = [y, x];
  console.log(x, y);
  useEffect(() => {}, []);
  return <div></div>;
}

export default App;
//negative means invallid, 0-50k no tax, 50-100k 10%, 100k er upor 15%
