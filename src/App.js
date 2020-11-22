import './App.css';
import React, {useState} from 'react';
import Grid from './Grid';




function App() {
    const [color ,setColor] = useState('#ff0000');
  
    

    const colorPicker = (e)=>{
      setColor(e.target.value)
    }

  return (
    <div className="app">
      <input type="color"
      value = {color}
      onChange={colorPicker}
      />
      <Grid color={color} />
    </div>
  );
}

export default App;
