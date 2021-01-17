import './App.css';
import Button from './Components/Button/button'
import Login from './Pages/LoginPage/login';

function App() {
  return (
    <div className="App">
      {/* <Button handleClick={() => alert("hello")} type="back"/> */}
      <Login />
    </div>
  );
}

export default App;
