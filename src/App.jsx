import { useState } from "react";
import "./App.css";
import Clock from './Components/Clock'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <Clock />
      </div>
    </>
  );
}

export default App;
