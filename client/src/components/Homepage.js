import React, { useState, useEffect } from 'react'

function Homepage() {
  const [count, setCount] = useState(0)
  
    useEffect(() => {
        fetch("/hello")
          .then((r) => r.json())
          .then((data) => setCount(data.count));
      }, []);
    
      return (
        <div className="App">
          <h1>Count: {count}</h1>
        </div>
      );
}

export default Homepage