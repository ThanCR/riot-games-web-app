import './App.css';
import NavBar from './containers/NavBar';
import Rotation from './containers/Rotation';
import TierList from './containers/TierList';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Rotation/>
      <TierList/>
    </div>
  );
}

export default App;
