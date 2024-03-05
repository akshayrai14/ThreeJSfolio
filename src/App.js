import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import {Home ,About,Projects,Contact} from './pages';

function App() {
  return (
    <main className='bg-slate-300/20 h-full'>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/projects' element={<Projects/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
      </Router>
    </main>
  );
}

export default App;
