import { useState } from "react";
import "./App.css";

function App() {
  // Initialize counter state with default value of 15
  // Using destructuring to get counter value and setter function
  const [counter, setCounter] = useState(15);

  // Constants for counter limits
  const MAX_COUNT = 5;
  const MIN_COUNT = 0;

  // Handler to increment counter value
  const addValue = () => {
    // Check if counter has reached maximum limit
    if (counter >= MAX_COUNT) return;

    // Update counter using setter function
    setCounter((prevCount) => prevCount + 1);
    console.log("Counter value updated to", counter + 1);
  };

  // Handler to decrement counter value
  const removeValue = () => {
    // Check if counter has reached minimum limit
    if (counter <= MIN_COUNT) return;

    // Update counter using setter function
    setCounter((prevCount) => prevCount - 1);
    console.log("Counter value updated to", counter - 1);
  };

  return (
    <>
      <h1>Chai ☕ aur React 🌟</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue} disabled={counter >= MAX_COUNT}>
        Increment ({counter})
      </button>
      <br />
      <br />
      <button onClick={removeValue} disabled={counter <= MIN_COUNT}>
        Decrement ({counter})
      </button>
    </>
  );
}

export default App;
