// import logo from './logo.svg';
// import './App.css';
import Navbar from './navbar';
import Home from "./Home";
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';

function App() {
  const title = "Hello, Dear Gaurav";
  const likes = 50;
  const link = "https://www.google.com";

  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        

        <div className="content">

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
          </Routes>

          {/* <h1>{ title }</h1>
          <p>likes: {likes} people</p>
          <p>{ [1,2,3,4,5,6,7,8] }</p>
          <p>{ Math.random() * 20}</p>

          <a href="https://www.google.com">Google</a><br />

          <a href={link}>Google Site</a> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
