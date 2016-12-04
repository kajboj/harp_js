import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

function harp(k) {
  return {
    key: k,
    holes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],

             //    1     2     3     4     5     6     7     8     9    10
    blowBend2: [null, null, null, null, null, null, null, null, null, k+34], // relative to blow
    blowBend1: [null, null, null, null, null, null, null, k+27, k+30, k+35], // relative to blow
    blow:      [ k+0,  k+4,  k+7, k+12, k+16, k+19, k+24, k+28, k+31, k+36], // relative to the key
    draw:      [ k+2,  k+7, k+11, k+14, k+17, k+21, k+23, k+26, k+29, k+33], // relative to the blow
    drawBend1: [ k+1,  k+6, k+10, k+13, null, k+20, null, null, null, null], // relative to draw
    drawBend2: [null,  k+5,  k+9, null, null, null, null, null, null, null], // relative to draw
    drawBend3: [null, null,  k+8, null, null, null, null, null, null, null], // relative to draw
  }
}

ReactDOM.render(
  <App harp={harp(0)}/>,
  document.getElementById('root')
);
