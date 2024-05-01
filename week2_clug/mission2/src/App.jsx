import logo from './logo.svg';
import './App.css';
import Poster from './component/Poster'
import Dummy from './data.json'
function App() {
  return (
    <div className="App">
      {Dummy.results.map((item) => {
        return (
          <Poster
            name={item.title}
            poster={item.poster_path}
            date={item.release_date}
            overview={item.overview}
          />
        )
      })}
    </div>
  );
}

export default App;
