import './App.css';
import Button from './Components/Button/button'

function App() {
  return (
    <div className="App">
      <Button handleClick={() => alert("hello")} type="back"/>
    </div>
  );
}

export default App;
