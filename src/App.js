import {Route} from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import HomePage from './Components/HomePage/HomePage';
function App() {
  return (
    <div>
      <Header/>
      <Route to='/' component={HomePage}/>
    </div>
    
  );
}

export default App;
