// import logo from './logo.svg';
import './App.css';
import Navbar from './navbar';

function App() {
  const title = "Hello, Dear Gaurav";
  const likes = 50;
  const link = "https://www.google.com";

  return (
    <div className="App">
      <Navbar></Navbar>

      <div className="content">
        <h1>{ title }</h1>
        <p>likes: {likes} people</p>
        <p>{ [1,2,3,4,5,6,7,8] }</p>
        <p>{ Math.random() * 20}</p>

        <a href="https://www.google.com">Google</a><br />

        <a href={link}>Google Site</a>
      </div>
    </div>
  );
}

export default App;
