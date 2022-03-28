import { useState, useEffect } from "react";
import ProgressCircle from "../progressCircle";
import Modal from '../modal'

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
      <Modal>
        content
      </Modal>
    </div>
  );
}

export default App;
