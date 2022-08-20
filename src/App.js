import './App.css';
import Comments from './components/Comments';
import data from './data.json'

function App() {
  return (
    <div className="App">
      <Comments comments={data.comments} currentUser={data.currentUser.username} />
    </div>
  );
}

export default App;
