import "./App.css"
import Header from "./components/Header/Header";
import Nav from "./components/NavBar/Nav";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <div className="appWrapper">
      <Header />
      <Nav />
      <Profile />
    </div>
  );
}

export default App;
