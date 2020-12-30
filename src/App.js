import React from 'react';
import './App.css'; 
import Help from './help';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  let href = ""
  let points = 0
  const e1 = () => {
    document.getElementById(random).innerText = "x";
    document.getElementById("play").innerText = "Playing...";
  }
  
  const win = () => {
    if(document.getElementById("button1").innerText === "o" && document.getElementById("button2").innerText === "o" && document.getElementById("button3").innerText === "o"){
      document.getElementById("play").innerText = "Victory";
      points = points + 20 + "%";
      document.getElementsByClassName("skills-js").innerHTML = x;
    }
    else if(document.getElementById("button4").innerText === "o" && document.getElementById("button5").innerText === "o" && document.getElementById("button6").innerText === "o"){
      document.getElementById("play").innerText = "Victory";
    }
    else if(document.getElementById("button7").innerText === "o" && document.getElementById("button8").innerText === "o" && document.getElementById("button9").innerText === "o"){
      document.getElementById("play").innerText = "Victory";
    }
    else if(document.getElementById("button7").innerText === "o" && document.getElementById("button5").innerText === "o" && document.getElementById("button3").innerText === "o"){
      document.getElementById("play").innerText = "Victory";
    }
    else if(document.getElementById("button1").innerText === "o" && document.getElementById("button5").innerText === "o" && document.getElementById("button9").innerText === "o"){
      document.getElementById("play").innerText = "Victory";
    }
    else if(document.getElementById("button1").innerText === "o" && document.getElementById("button4").innerText === "o" && document.getElementById("button7").innerText === "o"){
      document.getElementById("play").innerText = "Victory";
    }
    else if(document.getElementById("button2").innerText === "o" && document.getElementById("button5").innerText === "o" && document.getElementById("button8").innerText === "o"){
      document.getElementById("play").innerText = "Victory";
    }
    else if(document.getElementById("button3").innerText === "o" && document.getElementById("button6").innerText === "o" && document.getElementById("button9").innerText === "o"){
      document.getElementById("play").innerText = "Victory";
    }
  }

  const error = () => {
    if(document.getElementById("button1").innerText === "x" && document.getElementById("button2").innerText === "x" && document.getElementById("button3").innerText === "x"){
      document.getElementById("play").innerText = "Your opponent wins";
    }
    else if(document.getElementById("button4").innerText === "x" && document.getElementById("button5").innerText === "x" && document.getElementById("button6").innerText === "x"){
      document.getElementById("play").innerText = "Your opponent wins";
    }
    else if(document.getElementById("button7").innerText === "x" && document.getElementById("button8").innerText === "x" && document.getElementById("button9").innerText === "x"){
      document.getElementById("play").innerText = "Your opponent wins";
    }
    else if(document.getElementById("button7").innerText === "x" && document.getElementById("button5").innerText === "x" && document.getElementById("button3").innerText === "x"){
      document.getElementById("play").innerText = "Your opponent wins";
    }
    else if(document.getElementById("button1").innerText === "x" && document.getElementById("button5").innerText === "x" && document.getElementById("button9").innerText === "x"){
      document.getElementById("play").innerText = "Your opponent wins";
    }
    else if(document.getElementById("button1").innerText === "x" && document.getElementById("button4").innerText === "x" && document.getElementById("button7").innerText === "x"){
      document.getElementById("play").innerText = "Your opponent wins";
    }
    else if(document.getElementById("button2").innerText === "x" && document.getElementById("button5").innerText === "x" && document.getElementById("button8").innerText === "x"){
      document.getElementById("play").innerText = "Your opponent wins";
    }
    else if(document.getElementById("button3").innerText === "x" && document.getElementById("button6").innerText === "x" && document.getElementById("button9").innerText === "x"){
      document.getElementById("play").innerText = "Your opponent wins";
    }
  }

  var random = "button" + (Math.floor(Math.random() * 10) + 1);

  const p1 = () => {
    if(document.getElementById("button1").innerText === "x"){
      // alert("X is on this place")
      error()
    }else{
      document.getElementById("button1").innerText = "o"
      // alert("your move is on the marked place")
      win()
      document.getElementById(random).innerText = "x"
    }
  };

  const p2 = () => {
    if(document.getElementById("button2").innerText === "x"){
      // alert("X is on this place")

      error()
    }else{
      document.getElementById("button2").innerText = "o"
      // alert("your move is on the marked place")
      win()
      document.getElementById(random).innerText = "x"
    }
  };
  const p3 = () => {
    if(document.getElementById("button3").innerText === "x"){
      // alert("X is on this place")

      error()
    }else{
      document.getElementById("button3").innerText = "o"
      // alert("your move is on the marked place")
      win()
      document.getElementById(random).innerText = "x"
    }
  };
  const p4 = () => {
    if(document.getElementById("button4").innerText === "x"){
      // alert("X is on this place")

      error()
    }else{
      document.getElementById("button4").innerText = "o"
      // alert("your move is on the marked place")
      win()
      document.getElementById(random).innerText = "x"
    }
  };
  const p5 = () => {
    if(document.getElementById("button5").innerText === "x"){
      // alert("X is on this place")

      error()
    }else{
      document.getElementById("button5").innerText = "o"
      // alert("your move is on the marked place")
      win()
      document.getElementById(random).innerText = "x"
    }
  };
  const p6 = () => {
    if(document.getElementById("button6").innerText = "x"){
      // alert("X is on this place")

      error()
    }else{
      document.getElementById("button6").innerText = "o"
      // alert("your move is on the marked place")
      win()
      document.getElementById(random).innerText = "x"
    }
  };
  const p7 = () => {
    if(document.getElementById("button7").innerText = "x"){
      // alert("X is on this place")

      error()
    }else{
      document.getElementById("button7").innerText = "o"
      // alert("your move is on the marked place")
      win() 
      document.getElementById(random).innerText = "x"
    }
  };
  const p8 = () => {
    if(document.getElementById("button8").innerText = "x"){
      // alert("X is on this place")

      error()
    }else{
      document.getElementById("button8").innerText = "o"
      // alert("your move is on the marked place")
      win()
      document.getElementById(random).innerText = "x"
    }
  };
  const p9 = () => {
    if(document.getElementById("button9").innerText = "x"){
      // alert("X is on this place")

      error()
    }else{
      document.getElementById("button9").innerText = "o"
      // alert("your move is on the marked place")
      win()
      document.getElementById(random).innerText = "x"
    }
  };
  const mywin = () => {
    window.open("/help");
  }
  return (
    <div className="App">
      <a href="http://localhost:3000"><h1 style={{color:"black", textDecoration: "underline"}}>Games website!!!</h1></a ><br/><br/>
      <button onClick={mywin} id="needhelp"><h3><strong>Learn tic-tac-toe</strong></h3></button><br></br><br></br>
      {/* style={{backgroundColor:"lightgray", borderColor:"black", borderWidth:"thin", borderStyle:"solid", padding: "2px"}} */}
      <table>
        <tr>
          <tbody><button id="button1" onClick={p1}><h3> </h3></button><button id="button2" onClick={p2}><h3> </h3></button><button id="button3" onClick={p3}><h3> </h3></button></tbody>
          <tbody><button id="button4" onClick={p4}><h3> </h3></button><button id="button5" onClick={p5}><h3> </h3></button><button id="button6" onClick={p6}><h3> </h3></button></tbody>
          <tbody><button id="button7" onClick={p7}><h3> </h3></button><button id="button8" onClick={p8}><h3> </h3></button><button id="button9" onClick={p9}><h3> </h3></button></tbody><br></br>
          <button onClick={e1} href={href}><h4><strong id="play">Play</strong></h4></button><br></br><br></br>
        </tr>
      </table><br></br>
        <div class="container">
          <div class="score">score: {poits}%</div>
        </div><br/>
      <a href="http://localhost:3000" id="retry"><strong>Retry</strong></a><br></br><br></br>
      {/* style={{backgroundColor:"lightgray", borderColor:"black", borderWidth:"thin", borderStyle:"solid", padding: "2px"}} */}
      <Router>
          <div>
              <Switch>
                <Route path="/help" component={Help} />
              </Switch>
          </div>
      </Router>
    </div>
  );
}

export default App;