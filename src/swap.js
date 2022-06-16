import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import Ifelse from "./practice/Ifelse";
function App() {
  var a = 5;
  var b = 7;
  var temp = a;
  a=b;
  b=temp;
  console.log(a, b);
  useEffect(() => { 
   
  }, []);

  return <div></div>;
}

export default App;
//negative means invallid, 0-50k no tax, 50-100k 10%, 100k er upor 15%
