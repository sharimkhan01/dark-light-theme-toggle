import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Body from "./components/Body/Body";
import Footers from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Navigation />
      <Body />
      <Footers />
    </div>
  );
}

export default App;
