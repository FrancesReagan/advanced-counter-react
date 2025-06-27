// this component now handles all the required functionality, including state management, side effects, and rendering.//
import { useState, useEffect } from "react";


function CounterDisplay() {
  // state for current count, initialized form localStorage or 0//
 const [count, setCount] = useState(() =>{
  const savedCount = localStorage.getItem("count");
  return savedCount ? parseInt(savedCount, 10) : 0;
 });

// state for history of counts//
const [history, setHistory] = useState([0]);

// handle increment//
const handleIncrement =() => {
  setCount((prevCount) => {
    const newCount = prevCount + 1;
    setHistory((prevHistory) => [...prevHistory, newCount]);
    return newCount;
  });
};

// handle decrement//
const handleDecrement =() => {
  setCount((prevCount)=> {
    const newCount= prevCount - 1;
    setHistory(prevHistory => [...prevHistory,newCount]);
    return newCount;
  });
};

// auto-save count to localStorage//
useEffect(() => {
  let isCurrent=true;
  const saveCount =() => {
    if (isCurrent) {
      localStorage.setItem("count", count.toString());
    }
  };

  // simulate async save (e.g., to a server)//
  const timer = setTimeout(saveCount, 500);

  // clean up to prevent saving stale data//
  return () => {
    isCurrent = false;
    clearTimeout(timer);
  };
},[count]);

//keyboard event listeners for arrowup and arrowndown//
useEffect(() => {
  const handleKeyDown = (event) => {
    if(event.key === "ArrowUp") {
      handleIncrement();
    } else if (event.key === "ArrowDown") {
      handleDecrement();
    }
    };

    document.addEventListener("keydown", handleKeyDown);

    // clean up to remove event listener//
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
    // empty dependency array as handlers don't change.//
 }, []);

  }


return (
<div>
  <h2>Current Count:{count}</h2>
<div>
  <button onClick={handleDecrement}>Decrement</button> 
  <button onClick={handleIncrement}>Increment</button> 
</div>

<p>Count History:{history.join(",")}</p>
<p>Changes saved.</p>
<p>Use ArrowUp to increment and ArrowDown to decrement.</p>
</div>
);
)

export default CounterDisplay;