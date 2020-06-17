import React from 'react';
import './App.css';
import Bat from './bat.js';

function App() {
  return (
    <div className="App">
      <h1>Batting Summary</h1>
      <hr />
      
      <Bat batsman='Sharjeel Khan' runs='50' balls='27'></Bat>
      <hr />
      
      <Bat batsman='Muhammad Hafeez' runs='20' balls='30'></Bat>
      <hr />
      
      <Bat batsman='Babar Azam' runs='82' balls='70'></Bat>
      <hr />
      
      <Bat batsman='Haris Sohail' runs='30' balls='25'></Bat>
      <hr />
      
      <Bat batsman='Shahid Afridi' runs='10' balls='2'></Bat>
      <hr />
      
      <Bat batsman='Sarfaraz Ahmed' runs='54' balls='45'></Bat>
      <hr />
      
      <Bat batsman='Imad Wasim' runs='25' balls='18'></Bat>
      <hr />
      
      <Bat batsman='Hassan Ali' runs='10' balls='12'></Bat>
      <hr />

      <Bat batsman='Wahab Riaz' runs='18' balls='24'></Bat>
      <hr />

      <Bat batsman='Muhammad Amir' runs='0' balls='1'></Bat>
      <hr />

      <Bat batsman='Shaheen Shah Afridi' runs='0' balls='0'></Bat>
      <hr />
    </div>
  );
}

export default App;
