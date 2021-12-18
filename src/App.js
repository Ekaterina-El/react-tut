import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Nav from "./components/NavBar/Nav";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <div className="appWrapper">
      <Header />
      <Nav />
      <div className="content">
        {/* <Profile /> */}
        <Dialogs />
      </div>
    </div>
  );
}

export default App;
