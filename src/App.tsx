import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TimerPadre } from "./components/TimerPadre";
import { ContadorRed } from "./components/ContadorRed";
import { Formulario } from "./components/Formulario";
import { Formulario2 } from "./components/Formulario2";
import { SpecieApi } from "./api/SpecieApi";

function App() {
    return (
    <div className="App">

      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />

          <div>

              <hr/>
              <h3> useEffect - useRef</h3>
              <hr/><br/>

              <TimerPadre/><br/>

              <hr/>
              <h3>useReducer</h3>
              <hr/><br/>

              <ContadorRed/><br/><br/>

              <hr/>
              <h3>Formulario - customHooks</h3>
              <hr/><br/>

              <Formulario/><br/>
              <Formulario2/><br/>

              <SpecieApi/><br/>

          </div>

      </header>
    </div>
  );
}

export default App;
