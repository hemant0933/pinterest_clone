import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Business from './Pages/Business.jsx';
import Blog from './Pages/Blog.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/business' element={<Business/>}/>
        <Route path='/blog' element={<Blog/>}/>
      </Routes>

      

    </div>
  );
}

export default App;
