import './App.css';
import Todo from './Components/Todo';
import AppContextProvider from './StateManager/context';

function App() {
  return (
    <div className="App">
      <AppContextProvider>
      <Todo />
      </AppContextProvider>
    </div>
  );
}

export default App;
