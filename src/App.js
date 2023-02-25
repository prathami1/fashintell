import './App.css';

//components
import Heading from './components/Heading'
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <header className="App-header">    
        <Heading/>
        <Sidebar/>
      </header>
    </div>
  );
}

export default App;
