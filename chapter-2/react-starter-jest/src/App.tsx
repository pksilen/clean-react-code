import { useState } from 'react';
import '@/App.css';
import { TextDisplay } from '@/TextDisplay.tsx';

const App = () => {
  const [count, setCount] = useState(0);

  const log = (message: string) => {
    // eslint-disable-next-line no-console
    console.log(message);
  };

  const object = {
    value: 'value'
  };

  return (
    <div className="card">
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <TextDisplay log={log} object={object} text="Hello World" />
    </div>
  );
};

export default App;
