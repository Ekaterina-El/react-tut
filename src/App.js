import { withRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import "./App.css";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import Nav from "./components/NavBar/Nav";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";

function App() {
  return (
    <div className="appWrapper">
      <HeaderContainer />
      <Nav />
      <div className="content">
        <Route path="/profile/:id?" render={() => <ProfileContainer />} />
        <Route path="/dialogs/" render={() => <DialogsContainer />} />
        <Route path="/users/" render={() => <UsersContainer />} />
        <Route path="/login/" render={() => <Login />} />
      </div>
    </div>
  );
}

export default withRouter(App);
