//CommonJS
//const React = require('react);

//ES6
//import React from ' react'

//1. Tener React en scope
import React from 'react';
//2. Tenes reactDom en scope
import ReactDOM from 'react-dom';
import App from './App';

//3. Crear un componente

//4. Renderizar la aplicacion por unica vez
ReactDOM.render(<App/>, document.getElementById('root'));
