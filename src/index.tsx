import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Header } from './header';
import { PegaData } from './pegadata';
import { FruitLoops } from './fruitloops';

let fruit = [
    'red',
    'blue',
    'pink',
    'black'
]


ReactDOM.render (
    <div>
        <Header text='propsssss'/>
        <PegaData/>
        <FruitLoops fruit={fruit}/>
    </div>,

    document.querySelector('#root')
)