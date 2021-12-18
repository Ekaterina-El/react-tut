import { withRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Nav from "./components/NavBar/Nav";
import Profile from "./components/Profile/Profile";

function App({state, dispatch}) {
  debugger
  return (
    <div className="appWrapper">
      <Header />
      <Nav />
      <div className="content">
          <Route path="/profile/" render={() => <Profile {...state.profile} dispatch={dispatch} />} />
          <Route path="/dialogs/" render={() => <Dialogs {...state.dialogs} dispatch={dispatch} />} />
      </div>
    </div>
  );
}

export default withRouter(App);
