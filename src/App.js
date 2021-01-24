import './App.css';
import {  AuthProvider } from './Contexts/AuthContexts';
import Signup from './Pages/SignUpPage/signup';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './Pages/LoginPage/login';
import ForgotPassword from './Pages/ForgotPasswordPage/forgotPassword'

function App() {
  return (
      <div className="App"> 
      <Router>
          <AuthProvider>
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/forgotPassword" component={ForgotPassword} />
          </AuthProvider>
     </Router>
   
      </div>
  );
}

export default App;
