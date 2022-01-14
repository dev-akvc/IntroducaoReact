import React from 'react';
import ReactDOM from 'react-dom';
import ComponentComProps from './components/ComponentComProps';
import Cartao from './components/Layouts/Cartao';
import PrimeiroComponente from './components/PrimeiroComponent';
import './index.css';

ReactDOM.render(
<div>
  <Cartao titulo="Cartao #1" conteudo="Pug é lindo"></Cartao>
  <Cartao titulo="Cartao #2" conteudo="Pug é fofinho"></Cartao>
</div>,
  document.getElementById('root')
);
