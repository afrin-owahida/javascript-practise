import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import Ifelse from "./practice/Ifelse";

function App() {
  //lgn 50-60 er moddhe hole name and lgn print korbe
 

   var namae = "my name is priya ra";
   
   var arr = namae.split(" ");
   
   console.log(arr);
  useEffect(() => {
   var val=arr[0];
    let largest = arr[0].length;
    for (let i = 0; i < arr.length; i++) {
    //  console.log(arr[i].length);
     if (largest<arr[i].length) {
       largest =arr[i].length;
       val=arr[i]
     }
    }
    console.log(val);
  }, []);

  return <div>{/* <Ifelse/> */}</div>;
}

export default App;
//negative means invallid, 0-50k no tax, 50-100k 10%, 100k er upor 15%
