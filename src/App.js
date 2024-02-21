import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import {BrowserRouter, Route, Router, Routes} from 'react-router-dom'
import Read from './components/Read';
import Edit from './components/Edit';


function App() {


  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element = {<Form/>}/>
        <Route path='/read' element = {<Read/>}/>
        <Route path='/edit/:id' element = {<Edit/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
