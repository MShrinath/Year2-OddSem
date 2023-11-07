import mg from './okok.png';
// import './ok.css';
import ChildComponent from './ChildComponent';
import IDCardApp from './Idcard';


import { useState } from 'react';
import Timer from './Timer';


function TB() {

  let [msg, setMessage] = useState('');
  let [ccount, setCount] = useState(0);

  let [words, setWords] = useState(0);

  const handleChange = event => {
    setMessage(event.target.value);
    setCount(ccount + 1);
    setWords(countWords());
  };

  function up() {
    setMessage(msg.toUpperCase());
  }

  function low(){
    setMessage(msg.toLowerCase());
  }
  
  function countWords() {
    let words = msg.split(' ');
    return words.length;
  }

  return (
    <div>
      <input
        type="text"
        id="txt"
        onChange={handleChange}
        value={msg}
      />
      <p >MSG = {msg}</p>

      <button onClick={up}>Caps</button>
      <button onClick={low}>Lower</button>
      

      <p>Words : {words}  Characters : {ccount}</p>
    </div>
  );
}

function Img(){
  return(
    <img
    src={mg}>
    
    </img>
  );
}

function Prp(){
  const name ="Shrin";
  const age = 18;
  const id = 32708;

  return (
    <div>
      <ChildComponent name = {name} age = {age} id = {id}/>
    </div>
  );
}




function App() {
  return (
    <div>
      <h1 class="hdr">Welcome to MERN</h1>

      {/* <TB />*/}

        <Img/> 
      <Timer />
      {/* <ul>
        <li>Hiiii</li>
        <li>Hello</li>
    </ul> */}

    <IDCardApp /> 
    <Prp/>
    </div>
  );
}

export default App;
