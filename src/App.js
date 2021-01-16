import './App.css';
import Button from './Components/Button/button'

function App() {
  return (
    <div className="App">
      <Button handleClick={() => alert("hello")}/>
    </div>
  );
}

export default App;
