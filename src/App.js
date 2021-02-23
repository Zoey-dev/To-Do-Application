import './App.css';
// import ProgressBar from './Components/ProgressBar/progress'
import Signup from './Pages/SignUpPage/signup'
import Login from './Pages/LoginPage/login'
import ForgotPassword from './Pages/ForgotPasswordPage/forgotPassword'
import {Route, BrowserRouter} from 'react-router-dom'
import {AuthProvider} from './Contexts/AuthContexts'




function App() {
  return (
    //  <ProgressBar value = {71}  />
     
       <BrowserRouter>
          <AuthProvider>
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/forgotPassword" component={ForgotPassword} />
          </AuthProvider>
     </BrowserRouter>

   
  );
}

export default App;
