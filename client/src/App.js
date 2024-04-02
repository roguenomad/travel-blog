import './App.css';
import Header from "./Header"
import Post from "./Post";
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import Layout from "./Layouts"
import { Route, Routes } from "react-router-dom";
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <Routes>
      <Route path = "/" element = { <Layout /> }> 
        <Route index element = { <IndexPage /> } />
        <Route path = '/login' element = { <LoginPage /> } />
        <Route path= '/register' element = { <RegisterPage /> } />
      </Route>
    </Routes>
  );
}

export default App;
