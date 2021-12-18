import { withRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Header from "./components/Header/Header";
import Nav from "./components/NavBar/Nav";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <div className="appWrapper">
      <Header />
      <Nav />
      <div className="content">
        <Route path="/profile/" render={() => <Profile />} />
        <Route path="/dialogs/" render={() => <DialogsContainer />} />
      </div>
    </div>
  );
}

export default withRouter(App);
