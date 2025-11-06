import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); //prevents page reload
    alert(`Hello, ${name}`);
  };

  return (
    <>
      <div className='form-container'>
        <h2>Simple React Form</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Enter your name:
            <input
              type="text"
              value={name}            //controlled input
              onChange={(e) => setName(e.target.value)}
              placeholder='Type your name'
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default App;

/**
 * Explantion:
 * React uses state (useState) to control the  input field's value.
 * The onChange event handles the state every time you type.
 * The onSubmit event handles what happens when you press the button.
 * 
 * This is what you call `controlled component`, because React controls the input value 
 * (controlled state - means that its value is tied to the React state, ensuring that the UI always reflects the latest state).
 * 
 */
