
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Blogs/Blogs';
import Dashboard from './Dashboard/Dashboard';
import Header from './Header/Header';
import Home from './Home/Home';
import Reviews from './Reviews/Reviews';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      </Routes>
    </div>
  );
}

export default App;
