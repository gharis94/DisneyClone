import {Route} from 'react-router-dom';
import './App.css';
import Details from './Components/Details/Details';
import Header from './Components/Header/Header';
import HomePage from './Components/HomePage/HomePage';
import Login from './Components/Login/Login';


const App=()=> {
  return (
    <div>
      <Header/>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/details' component={Details}/>
      <Route exact path='/login' component={Login}/>
    </div>
    
  );
}

export default App;
