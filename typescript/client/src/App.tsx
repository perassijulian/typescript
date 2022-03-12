import './styles.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Books from './components/pages/Books';


function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/books" element={<Books />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
