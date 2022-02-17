import { useState } from "react";
import DisplayCount from "./Components/DisplayCount"
import { countContext } from "./utils/Context"

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">

      <countContext.Provider value={{ count, setCount }}>
        <DisplayCount />
      </countContext.Provider>

    </div>
  );
}

export default App;
