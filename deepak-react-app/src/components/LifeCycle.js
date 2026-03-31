//Set break points where you lose the code
import React, { useState, useEffect } from "react";

function Lifecycle() {
  const [count, setCount] = useState(0);

  // useEffect for componentDidMount and componentDidUpdate
  useEffect(() => {
    console.log("Component mounted or updated"); // debugger

    return () => {
      // debugger
      console.log("Component will unmount"); // debugger
    }; // debugger
  }, [count]);

  // const inCrementCount = () => {setCount(count + 1);
  // };

  //  const incrementCount = () => {setCount(count - 1);
  // };

  const handleIncrease = () => {
    setCount(count + 1); // debugger
  };
  const handleDecrease = () => {
    setCount(count - 1); // debugger
  };

  return (
    <div>
      <h1>Lifecycle Monitor</h1>
      <CounterDisplay count={count} />
      <CounterControls
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
      />
    </div>
  );
}

//       <p>Count: {count}</p>
//       <button onClick={incrementCount}>Increment</button>
//     </div>
//   );
// }

// child #1
function CounterDisplay({ count }) {
  return <p>Current Count Value: {count}</p>;
}

// child #2
function CounterControls({ count, onIncrease, onDecrease }) {
  return (
    <>
      <button onClick={onIncrease}>Increase:</button>
      <button onClick={onDecrease}>Decrease: </button>
      {console.log()}
    </>
  );
}
export default Lifecycle;
