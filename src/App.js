import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import NavBar from './components/navBar';
import Profile from './components/profile';
import {BrowserRouter,Route} from "react-router-dom"
import Messages from './components/messages';
import Messanger from './messanger/messanger';
 
function App(props) {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <NavBar></NavBar>
        {/* <Profile></Profile> */}
        <Route path="/" exact render={()=><Profile posts ={props.posts}></Profile>}></Route>
        <Route path="/profile" render={()=><Profile posts ={props.posts}></Profile>}></Route>
        <Route path="/messages" component={Messages}></Route>
        <Route path="/users/" component={Messanger}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
// Попробовать сделать диалог с одним пользователем