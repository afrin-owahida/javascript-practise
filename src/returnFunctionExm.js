import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import Ifelse from "./practice/Ifelse";

function App() {
  let obj = {
    name: "afrin",
    salary: 100000,
    geo: 55,
  };

  function generateSalary(base) {
    let finalSalary = 0;
    if (base < 0) {
      finalSalary = "invalid salary";
    } else if (base <= 50000) {
      finalSalary = base;
    } else if (base > 50000) {
      finalSalary = base - base * 0.1;
    }
    return finalSalary;
  }

  function generateLocation(geo) {
    let area = "";
    if (geo >= 51 && geo <= 60) {
      area = "gaibandha";
    } else if (geo >= 61 && geo <= 70) {
      area = "rangpur";
    }else{
      area = "invalid";
    }
    return area;
  }
  useEffect(() => {
    // afrin sary after tax calculation and location after finding from geo
    let salaryAfterTax = generateSalary(obj.salary);
    let location = generateLocation(obj.geo);
    console.log(
      obj.name +
        "'s Salary is " +
        salaryAfterTax +
        " and Location is " +
        location
    );
  }, []);

  return <div>{/* <Ifelse/> */}</div>;
}

export default App;
//negative means invallid, 0-50k no tax, 50-100k 10%, 100k er upor 15%
