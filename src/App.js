import './App.css';
import Dice from './Dice.js';

function App() {
  return (
    <div className="App">
        <Dice face="five"/>
        <Dice face="six"/>
        <Dice face="four"/>
        <Dice face="two"/>
        <Dice face="one"/>
        <Dice face="three"/>
    </div>
  );
}

export default App;
