import '../App.css';
import React from 'react';
import { collection, addDoc, getDocs } from "firebase/firestore";
import {db} from '../services/firebase';

//components
import Heading from '../components/Heading'
import Sidebar from '../components/Sidebar';
import Tabs from '../components/Tabs'
import Card from '../components/Card'
import Saved from '../components/Saved'

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <Heading/>
        <Sidebar/>
        <Tabs/>
        <Card/>
        <div style={{marginRight: "auto"}}>
          <Saved/>
        </div>
        
      </header>
    </div>
  );
}

export default Home;