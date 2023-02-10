import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <div>
        <h1>Redux Toolkit</h1>
      </div>
      <div className='card'>
        <button onClick={() => setCount(count => count + 1)}>count is {count}</button>
      </div>
    </div>
  );
}

export default App;
