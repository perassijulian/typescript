import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Account from "./pages/Account";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";
import ProductList from "./pages/ProductList";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/services/:category">
          <ProductList />
        </Route>
        <Route path="/account">
          <Account />
        </Route>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;