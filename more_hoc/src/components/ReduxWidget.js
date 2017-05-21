// @flow

type WidgetProps = {
  secret: string,
  isActive: boolean,
  toggle: () => void
}

import React from 'react';
import {compose, withHandlers, withReducer} from 'recompose';
import {ConnectMock} from './ConnectMock'
const {connect} = ConnectMock();

// withReducer(zmiennaStanu, dispatch, reducer, wartoscPoczatkowa).
const withToggle = () =>
  compose(
    // to nie ma nic wspolnego z reduxem, po prostu uzywamy stylu znanego z reducerow
    withReducer('isActive', 'dispatch', (state, action) => {
      switch (action.type) {
        case "SHOW":
          return true;
        case "TOGGLE":
          return !state;
        case "HIDE":
        default:
          return false;
      }
    }, false),
    // connect(), // takie uzycie connect przeslonilo byt funkecje dispatch z withReducer
    withHandlers({
      show: ({dispatch}) => (event) => dispatch({type: "SHOW"}),
      hide: ({dispatch}) => (event) => dispatch({type: "HIDE"}),
      toggle: ({dispatch}) => (event) => dispatch({type: "TOGGLE"})
    })
  );


const Body = withToggle()(({isActive, show, hide}) =>
  <div
    onMouseEnter={() => show()}
    onMouseLeave={() => hide()}
    className="widget-body">
    <span className={`widget-header ${isActive ? 'header-active' : ''}`}>Pieknie!</span>
    Sekret blisko
  </div>);

const Details = ({secret, detailsVisible}) => <div
  className={`widget-details ${detailsVisible ? 'widget-open' : ''}`}>
  {secret}
</div>


export const ReduxWidget = withToggle()(({secret, isActive, toggle}: WidgetProps) => {
  return <div className="widget"
              onClick={() => toggle()}>
    <Body/>
    <Details detailsVisible={isActive} secret={secret}/>
  </div>
})
