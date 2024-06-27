import { useState } from 'react';
import "./App.css"

const App = () => {
  const [count, setCount] = useState(0);

  const isPrime = (num) => {
    let factor = 0;

    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        factor++;
      }
    }
    return factor === 2;
  };

  return (
    <div className="container">
      <h1>Welcome to Counter 2.0</h1>
      <div className="button-group">
        <button onClick={() => setCount(count - 1)} disabled={count === 0}>-1</button>
        <button onClick={() => setCount(count + 1)} style={{backgroundColor:"#fc5656", color:"white"}}>+1</button>
      </div>
      <button className="reset" onClick={() => setCount(0)} style={{backgroundColor:"#fc5656", color:"white"}}>Reset Count</button>
      <div className="count">{count}<h2 style={{fontSize:"30px", marginTop:"0"}}>Count</h2></div>
      <h2 className="info">{count} is {count % 2 === 0 ? "an Even" : "an Odd"} Number</h2>
      <h2 className={`info ${isPrime(count) ? 'prime' : 'not-prime'}`}>
        {count} is {`${isPrime(count) ? 'a Prime' : 'not a Prime'}`} Number
      </h2>
    </div>
  );
};

export default App;