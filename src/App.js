import "./App.css";
import React, {useState} from 'react'

const [text, setText] = useState()

window.addEventListener('load', () => {
  setText(() => {
    localStorage.getItem('key')
  })
})

function App() {
  return (
    <div className="App">
      <div className="box">
        <div className="field">
          <div className="control">
            <textarea onChange={(e) => setText(() => e.target.value)} className="textarea is-large" placeholder="Notes..." value={text}/>
          </div>
        </div>
        <button onClick={() => localStorage.setItem('key', text)} className="button is-large is-primary is-active">Save</button>
        <button onClick={() => setText(() => '')} className="button is-large">Clear</button>
      </div>
    </div>
  );
}

export default App;

