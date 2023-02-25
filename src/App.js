import './App.css';

//components
import Heading from './components/Heading'
import Sidebar from './components/Sidebar';
import Tabs from './components/Tabs'

function App() {
  return (
    <div className="App">
      <header className="App-header">    
        <Heading/>
        <Sidebar/>
        <Tabs/>
      </header>
    </div>
  );
}

export default App;
