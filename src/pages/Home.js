import '../App.css';
import React from 'react';
import { collection, addDoc, getDocs } from "firebase/firestore";
import {db} from '../firebase';

//components
import Heading from '../components/Heading'
import Sidebar from '../components/Sidebar';
import Tabs from '../components/Tabs'

function Home() {
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

export default Home;