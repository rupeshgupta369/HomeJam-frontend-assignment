import './App.css';
import Home from "./Components/Home/Home"
import UpcomingShow from "./Components/UpcomingShow/UpcomingShow"
import Review from "./Components/Review/Review"

function App() {
  return (
    <div className='App'>
      <Home />
      <UpcomingShow />
      <Review />
    </div>
  );
}

export default App;
