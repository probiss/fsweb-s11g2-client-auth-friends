import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import FriendsList  from './components/FriendsList';

function App() {
  return (
    <div className="App">
      <Link to="/login"> Login </Link>
      <Link to="/friendss"> Friends List </Link>
      <Link to="/add-friend"> Add Friend </Link>
      <h1>Client Auth Projesi: Friends</h1>
      <Switch>
        <Route exact path="/" component={LoginForm} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/friendss" component={FriendsList} />
      </Switch>
    </div>
  );
}

export default App;
