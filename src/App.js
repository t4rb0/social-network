import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import NavBar from './components/navBar';
import Profile from './components/profile';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <NavBar></NavBar>
        <Profile></Profile>
    </div>
  );
}

export default App;
