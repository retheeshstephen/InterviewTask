import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Site from './Components/Home';
import Site2 from './Components/JoinPage';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Site/>}/>
        <Route path='/site' element={<Site2/>}/>

      </Routes>
      
    </div>
  );
}

export default App;
