import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Greet from "./components/destructarisation/Greet";
import GreetClass from "./components/destructarisation/GreetClass";


ReactDOM.render(
  <React.StrictMode>
      <div>
          <Greet name='Olga' hero='Wonder woman'/>
          <GreetClass name='Danilo' hero='Superman'/>
      </div>

  </React.StrictMode>,
  document.getElementById('root')
);


