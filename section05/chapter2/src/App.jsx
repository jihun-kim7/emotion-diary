import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Button from "./components/Button";
import { useState } from "react";

function App() {

  const [count,setCount] = useState(0);
  const [light,setLight] = useState("OFF");

  const Bulb = ({light}) => {
    console.log(light);
    return (
      <div>
        {light === "ON" ? (
          <h1 style={{backgroundColor: "orange"}}>ON</h1>
        ) : (
          <h1 style={{backgroundColor : "gray"}}>OFF
          </h1>)}
      </div>
    )
  }

  return (
    <>
      <div>
        <Bulb light={light} />
        <button onClick={() => {
          setLight(light === "ON" ? "OFF" : "ON");
        }}>
        {light === "ON" ? "끄기" : "켜기"}
        </button>
      </div>
    </>
  );
}

export default App;
