import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card.js';
import {Robots} from './Robots.js';
import 'tachyons'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	
  <React.StrictMode>
<div>
    <Card id={Robots[0].id} name ={Robots[0].name} email={Robots[0].email}/>
    <Card id={Robots[1].id} name ={Robots[1].name} email={Robots[1].email}/>
    <Card id={Robots[2].id} name ={Robots[2].name} email={Robots[2].email}/>
</div>
  </React.StrictMode>
  
  ,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
