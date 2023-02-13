import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import FriendsList  from './components/FriendsList';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import AddFriend from './components/AddFriend';

function App() {
  let loggedInToken = null;
  let isLoggedIn = false;
  const history = useHistory();

  useEffect(() => {
    loggedInToken = localStorage.getItem("s11g2");
    isLoggedIn = loggedInToken ===null ? false:true;
  },[]);

  const triggerLog = () => {
    localStorage.removeItem("s11g2");
    history.push("/");

  }
  return (
    <div className="App">
      <Link to="/friendss"> Friends List </Link>
      <Link to="/add-friend"> Add Friend </Link>
      {!isLoggedIn && <Link to="/login" > Login </Link>}
      {isLoggedIn && <Link onClick={triggerLog()} to="/logout"> Logout </Link>}

      <h1>Client Auth Projesi: Friends</h1>
      <Switch>
        <Route exact path="/" component={LoginForm} />
        <Route path="/login" component={LoginForm} />
        <Route path="/friendss">
          <FriendsList/>
        </Route>
        <Route path="/add-friend" component={AddFriend} />
      </Switch>
    </div>
  );
}

export default App;
