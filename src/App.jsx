import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Contacts from './components/Contacts/Contacts';
import About from './components/About/About';


function App() {
  return (
    <>
      <Header/>

      <Routes>
        <Route path='/' element = {<Home/>}></Route>
        <Route path='/about' element = {<About/>}></Route>
        <Route path='/contacts' element = {<Contacts/>}></Route>
      </Routes>
    </>
  );
}

export default App;