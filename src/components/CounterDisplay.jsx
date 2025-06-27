import { useState, useEffect } from "react";
import CounterButtons from "./CounterButtons";

function CounterDisplay() {
 const [count, setCount] = useState(0);


return (

  <>
  <h1>Counter Display test</h1>
  <h2>{count}</h2>
    <CounterButtons count={count} />
  </>
 )
}



export default CounterDisplay;