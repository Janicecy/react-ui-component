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
      <Modal onOk={() => console.log("modal on ok")}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad fugiat saepe id nobis molestias cupiditate. Nam at porro velit vel iste fugit mollitia recusandae itaque veniam delectus reiciendis, voluptatem ullam!
      </Modal>
    </div>
  );
}

export default App;
