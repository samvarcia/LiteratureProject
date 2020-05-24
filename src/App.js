import React, { Component } from "react";
import HomeImg from "./BooksImg.svg";
import "./App.css";

class App extends Component() {

  render() {
    return (
      <div className="App">
        <div className="Home">
          <div className="leftContent">
            <h1>Comparte los archivos de tus clases</h1>
            <p>El conocimiento deber ser libre</p>
            <div className="buttons">
              <button  id="logIn">
                Iniciar Sesión
              </button>
              <button id="upLoadFile">
                <input type="file" />
              </button>
              <button id="goFiles">Ver archivos</button>
            </div>
          </div>
          <div className="RightContent">
            <img src={HomeImg} alt="Icon" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
