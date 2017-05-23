import React from 'react';
import {withProps} from "recompose";

// with props DODAJE propsy do juz przekazanych, a nie tak jak  mapProps nadpisuje je

const StartLink = withProps({href: '#/'})('a'); // da sie wrapowac tez htmlowe tagi
const TestLink = withProps({href: '#/test'})('a');
const EndLink = withProps({href: '#/end'})('a');

// istnieje jeszcze flatten prop ktore przyjmuje nazwe obiektu przekazywanego i spreaduje go

export const HeadBar = () =>
  <div className="head-bar">
    <header>
      <StartLink>App</StartLink>
    </header>
    <nav>
      <StartLink>Start</StartLink>
      <TestLink>Test</TestLink>
      <EndLink>Meta</EndLink>
    </nav>
  </div>