import React from "react";
import "./style.css";
import Button from "./Button";
const App = () => {
    return (
        <div>
            <h2>hello world</h2>
            <Button title="App store"></Button>
            <Button title="Google"></Button>
            {/* <button className="button">hello</button>
            <button className="button">hello</button> */}
        </div>
    );
}
export default App;