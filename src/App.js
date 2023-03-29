
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import CustomNavbar from './components/CustomNavbar';
import CustomFooter from './components/CustomFooter';

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <footer className="App">
        <CustomFooter />
      </footer>
    </div>
  );
}

export default App;
