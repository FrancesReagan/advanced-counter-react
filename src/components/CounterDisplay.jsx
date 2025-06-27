// this component now handles all the required functionality, including state management, side effects, and rendering.//
import { useState, useEffect } from "react";
import CounterButtons from "./CounterButtons";

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
    setHistory((preHistory) => [...prevHistory, newCount]);
    return newCount;
  });
};

// handle decrement//
const handleDecrement =() => {}


return (

  <>
  <h1>Counter Display test</h1>
  <h2>{count}</h2>
    <CounterButtons count={count} />
  </>
 )
}



export default CounterDisplay;