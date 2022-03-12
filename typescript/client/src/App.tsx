import './styles.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';


function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/books" element={<h1>Books</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
