import { useState, useEffect } from "react";
import ProgressCircle from "../progressCircle";

function App() {
  const [percent, setPercent] = useState(0)
  
  useEffect(() => {
    const timer = setInterval(() => {
      setPercent(count => ++count)
    }, 100)

    return () => clearInterval(timer)
  }, [])
  
  return (
    <div className="App">
      <ProgressCircle percent={percent}/>
    </div>
  );
}

export default App;
