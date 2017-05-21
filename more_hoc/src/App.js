//@flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose, setDisplayName, setPropTypes} from "recompose";
import { ConnectMock } from './components/ConnectMock';
const {connect} = ConnectMock();
import UserTile from "./components/UserTile"
import BaseHoc from "./components/BasicHoc"
import { ColorChangeHoc } from "./components/ColorChangeHoc";
import { Widget } from "./components/Widget";
import './App.scss';


const WrappedUser = BaseHoc({name: "Buka"})(UserTile);
const ColorChangingUser = ColorChangeHoc()(UserTile);
const colorChangingWrappedEnchancement = compose(
  setDisplayName('User'),
  setPropTypes({
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
  }),
  BaseHoc({name: "Buka2"}),
  ColorChangeHoc(),
  connect() // dobry zwyczaj to tworzenie komponentow jako funkcji ktore zwracaja funkcje przyjmujace komponenty do wrapowania
  // ( w ten sposob mozna je latwo dekorowac)
)

const ColorChangingWrappedUser = colorChangingWrappedEnchancement((props) =>
  <UserTile {...props}></UserTile>);

class App extends Component {
  render() {
    return (
      <div className="App">
        HOC HOC
        <div className="users-container">
          <UserTile name="Rafał"></UserTile>
          <WrappedUser name="Krzyś"></WrappedUser>
          <ColorChangingUser name="Asia"></ColorChangingUser>
          <ColorChangingWrappedUser name="Asia"></ColorChangingWrappedUser>
        </div>
        <div className="widgets-container">
          <Widget secret="To sekret"/>
        </div>
      </div>
    )
  }
}

export default App;
