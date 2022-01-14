import React from 'react';
import ReactDOM from 'react-dom';
import ComponentComProps from './components/ComponentComProps';
import PrimeiroComponente from './components/PrimeiroComponent';
import './index.css';

ReactDOM.render(
<div>
  <PrimeiroComponente/>
  <ComponentComProps nome="Karol" cargo="Boss" />
</div>,
  document.getElementById('root')
);
