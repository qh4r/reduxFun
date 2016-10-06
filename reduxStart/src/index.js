import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return <div>H!</div>;
};

//ReactDOM.render(<App/>, document.getElementsByClassName('container')[0]);

// querySelector zwraca 1 eleement (first) querySelectorAll zwraca wszystkie elementy w []
ReactDOM.render(<App/>, document.querySelector('.container'));