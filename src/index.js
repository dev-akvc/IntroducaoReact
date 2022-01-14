import React from 'react';
import ReactDOM from 'react-dom';
import ComponentComFilhos from './components/ComponentComFilhos';
import ComponentComProps from './components/ComponentComProps';
import Cartao from './components/Layouts/Cartao';
import PrimeiroComponente from './components/PrimeiroComponent';
import './index.css';

ReactDOM.render(
<div>
  <Cartao titulo="Cartao #1 - Beleza" children="Pug é lindo"></Cartao>
  <Cartao titulo="Cartao #2 - Fofura" children="Pug é fofinho"></Cartao>
  <Cartao titulo="Cartao #3 - Nomes">
  <ComponentComFilhos>
    <ul>
      <li>Pug Maria</li>
      <li>Pug Toninho</li>
      <li>Pug Puguinho</li>
    </ul>
  </ComponentComFilhos>
  </Cartao>
  
</div>,
  document.getElementById('root')
);
