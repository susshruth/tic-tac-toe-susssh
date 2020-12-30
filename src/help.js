import './App.css'; 
import React from 'react';

function Help() {
  const [showtictactoe, setShowtictactoe] = React.useState(false)
  const onClick = () => {
    setShowtictactoe(true)
  }
  return (
    <div className="help">
      {/* <h1>Tic Tac Toe Website</h1>
      <table>
        <tr>
          <button id="play"onClick={e1}>Play</button>
          <tbody><button id="button1" onClick={p1} onChange={e2}><h3> </h3></button><button id="button2" onClick={p2} onChange={e2}><h3> </h3></button><button id="button3" onClick={p3} onChange={e2}><h3> </h3></button></tbody>
          <tbody><button id="button4" onClick={p4} onChange={e2}><h3> </h3></button><button id="button5" onClick={p5} onChange={e2}><h3> </h3></button><button id="button6" onClick={p6} onChange={e2}><h3> </h3></button></tbody>
          <tbody><button id="button7" onClick={p7} onChange={e2}><h3> </h3></button><button id="button8" onClick={p8} onChange={e2}><h3> </h3></button><button id="button9" onClick={p9} onChange={e2}><h3> </h3></button></tbody>
        </tr>
      </table><br></br>
      <a href="http://localhost:3000" style={{backgroundColor:"lightgray", borderRadius:"10%", borderColor:"black", borderWidth:"thin", borderStyle:"solid", textDecorationColor:"black"}}><img src="retry.png" alt="retry"></img>retry</a><br></br>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Dropdown>       */}
      {/* <a href="http://localhost:3000" style={{backgroundColor:"lightgray", borderColor:"black", borderWidth:"thin", borderStyle:"solid", padding: "2px"}}> <strong>Return to home</strong> </a><br></br><br></br> */}
      <div>
        <input id="showorhide"type="submit" value="show video" onClick={onClick} />
        { showtictactoe ? <iframe width="420" height="315" src="https://www.youtube.com/embed/5SdW0_wTX5c?controls=0"></iframe>: null }
      </div>
      {/* <div>
        <iframe width="420" height="315" src="https://www.youtube.com/embed/5SdW0_wTX5c?controls=0"></iframe>
      </div> */}
      {/* </Dropdown> */}

    </div>
  );
}

export default Help;