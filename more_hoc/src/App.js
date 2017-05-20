//@flow

import React, { Component } from 'react';
import { compose, setDisplayName, setPropTypes } from "recompose";
import { connect } from 'react-redux';

import UserTile from "./components/UserTile"
import BaseHoc from "./components/BasicHoc"
import { ColorChangeHoc } from "./components/ColorChangeHoc";

import './App.scss';


const WrappedUser = BaseHoc({name: "Buka"})(UserTile);
const ColorChangingUser = ColorChangeHoc(UserTile);
const colorChangingWrappedEnchancement = compose(
  setDisplayName('User'),
  setPropTypes({
    name: React.PropTypes.string.isRequired,
    className: React.PropTypes.string,
  }),
  BaseHoc({name: "Buka2"}),
  ColorChangeHoc
)

const ColorChangingWrappedUser = colorChangingWrappedEnchancement((props) =>
  <UserTile {...props} ></UserTile>);

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
      </div>
    )
  }
}

export default App;
