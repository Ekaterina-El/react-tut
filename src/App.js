import { withRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import "./App.css";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Header from "./components/Header/Header";
import Nav from "./components/NavBar/Nav";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";

function App() {
  return (
    <div className="appWrapper">
      <Header />
      <Nav />
      <div className="content">
        <Route path="/profile/" render={() => <ProfileContainer />} />
        <Route path="/dialogs/" render={() => <DialogsContainer />} />
        <Route path="/users/" render={() => <UsersContainer />} />
      </div>
    </div>
  );
}

export default withRouter(App);
