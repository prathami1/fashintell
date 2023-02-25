import '../App.css';
import Heading from '../components/Heading'
import { signInGoogle } from '../services/firebase';

function Login () {
    return(
    <div className="App">
      <header className="App-header">    
        <Heading/>
      </header>
      <button onClick = {signInGoogle}> Sign in with Google </button>
     </div>
    );
}

export default Login;