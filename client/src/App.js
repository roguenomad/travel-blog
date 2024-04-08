import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import Plan from "./pages/Plan";
import Blogs from "./pages/Blogs";
import About from "./pages/About";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element= { <Layout /> }>
        <Route index element= { <Home /> } />
          <Route path='destinations' element= { <Destinations /> }/>
          <Route path='plan' element= { <Plan /> }/>
          <Route path='blogs' element= { <Blogs /> }/>
          <Route path='about' element= { <About /> }/> 
        </Route>      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
