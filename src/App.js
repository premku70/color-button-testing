
import './App.css';
import {useState} from 'react'

export function replaceWithCamelCase(colorName){
  return colorName.replace(/\B([A-Z])\B/g,' $1'); 
}

function App() {
  const [buttonColor,setButtonColor] = useState('red');
  const [disableButton,setDisableButton] = useState(false);
  
  const newButtonColor = buttonColor==='red'?'blue':'red';
  


  return (
    <div>
<button disabled={disableButton} style={{backgroundColor:disableButton?'gray':buttonColor}} onClick={()=>setButtonColor(newButtonColor)}>Change to {newButtonColor}</button>
     <input id="disable-button-checkbox" type="checkbox" onClick={(e)=>setDisableButton(e.currentTarget.checked)}/>
     <label htmlFor="disable-button-checkbox">Disable button</label>
  </div>
  );
}

export default App;
