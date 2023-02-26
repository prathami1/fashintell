import '../App.css';
import React from 'react';
import Item from '../components/Item';
import Heading from '../components/Heading';


function Shop() {
  return (
    <div className="App">
      <header className="App-header">
        <Heading/>
        <Item/> 
      </header>
    </div>
  );
}

export default Shop;