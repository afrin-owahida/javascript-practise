import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import Ifelse from "./practice/Ifelse";

function App() {
  function doubleIt(num) {
    var result = num * 2;
    console.log(result);
  }
  useEffect(() => {
    // switch ("afrin") {
    //   case "afrin":
    //     console.log("sagol");
    //     break;
    //   case "akter":
    //     console.log("pagol");
    //     break;

    //   default:
    //     console.log("match hoini");
    //     break;
    // }
    // doubleIt(5);
    //if else conditions
    //   var number = 50;
    //  if(number>100 || number<0){
    //     console.log("invalid");
    //   }else{
    //     console.log("not");
    //   }
    //   // var student = "good"
    // if(name =="shoaib" || name == "mehedi" || name == "afrin akter"){
    //   console.log("found")
    // }
    // else{console.log("not found")}
    //array
    // var friendsAge = [15, 17, 14, 16, 30, 34];
    // friendsAge.push(12);
    // friendsAge.pop();
    // friendsAge.shift();
    // friendsAge.unshift(70);
    // var part = friendsAge.slice(2, 5);
    // var position = friendsAge.indexOf(16);
    // var sonali = friendsAge[2];
    // friendsAge[1] = 21;
    // var position = friendsAge.indexOf[3]
    // var position = friendsAge.indexOf[2];
    // console.log(position);
    // var first = "it is HARD to be a software developer";
    // console.log(first.toLocaleUpperCase());
    // console.log(first.toLocaleLowerCase());
    // console.log(first.indexOf("be")); //index 0 theke start hoy and space o count kore
    // console.log(first.split("to"));
    // console.log(first.split(" "));
    // //number string theke ber kora and string a dhukano
    // var number1 = 15;
    // var number2 = "3.5"; //eita r nicher line same e
    // // number2  = parseFloat(number2 );
    // number2 = +number2;
    // console.log(number1 + number2);
    // number1 = "" + number1; //number1 k string a rupantor korar way
    // // type findout
    // console.log(typeof number1);
    // var dosomik1 = 0.1;
    // var dosomik2 = 0.2;
    // var total = dosomik1 + dosomik2;
    // total = total.toFixed(3); //dosomik er por koy desimal dekhate chai
    // console.log(total)

    // var arr = ["afrin","tafrin","safrin"]

    // for(var i=0; i<arr.length; i++){
    //   console.log(arr[i]);
    // }

    function resultCalculation(number,name) {
      if (0 > number || 100 < number) {
        console.log(name+" invalid");
      }
      if (0 <= number && 33 > number) {
        console.log(name+" fail");
      } else if (33 <= number && 80 > number) {
        console.log(name+" pass");
      } else if (80 <= number && 100 >= number) {
        console.log(name+" got A+");
      }
      // else {console.log("invalid");}
    }
    // resultCalculation(100);

    let res = [
      {
        name: "afrin",
        num: 80,
      },
      {
        name: "mehedi",
        num: 32,
      },
      {
        name: "afrin",
        num: 80,
      },
      {
        name: "mehedi",
        num: 32,
      },
      {
        name: "afrin",
        num: 80,
      },
      {
        name: "mehedi",
        num: 32,
      },
      {
        name: "afrin",
        num: 80,
      },
      {
        name: "mehedi",
        num: 32,
      },
    ];
    for (let i = 0; i < res.length; i++) {
      // console.log( res[i].name);
      resultCalculation(res[i].num,res[i].name);
      
    }
  //  console.log(res);
  }, []);

  return <div>{/* <Ifelse/> */}</div>;
}

export default App;
