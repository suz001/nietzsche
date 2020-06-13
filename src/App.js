import React from 'react';
import './App.css';
import imgfile from './samplepic.jpeg';
import imgfile2 from './sample2.jpeg';
import imgfile3 from './sample3.jpeg';

const imgdes = "View";
const imgdes2 = "View2";
const imgdes3 = "View3";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='items'>
        <DisplayItem imgfile={imgfile} descrip={imgdes} />
        <DisplayItem imgfile={imgfile2} descrip={imgdes2} />
        <DisplayItem imgfile={imgfile3} descrip={imgdes3} />
      </div>
    </div>
  );
}

function NavBar() {
  return (
    <div className='NavBar'>
      <div>Home</div>
      <div>Shopping Cart</div>
    </div>);
}

function DisplayItem (props) {
  return (
    <div className='DisplayItem'>
      <div className='Descrip'>{props.descrip}</div>
      <div className='ImgContainer'><img src={props.imgfile} /></div>
      <div className='ButtonsContainer'>
        <button className='Button'>Another button</button>
        <button id='addtocart' className='Button' type='button' >Add to cart</button>
      </div>
    </div>);
}

export default App;
