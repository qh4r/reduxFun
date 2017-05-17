//@flow

import React, {Component} from 'react';
import UserTile from "./components/UserTile"
import BaseHoc from "./components/BasicHoc"
import {ColorChangeHoc} from "./components/ColorChangeHoc";

import './App.scss';


const WrappedUser = BaseHoc({name: "Buka"})(UserTile);
const ColorChangingUser = ColorChangeHoc(UserTile);

class App extends Component {
  render() {
    return (
      <div className="App">
        HOC HOC
        <div className="users-container">
          <UserTile name="Rafał"></UserTile>
          <WrappedUser name="Krzyś"></WrappedUser>
          <ColorChangingUser name="Asia"></ColorChangingUser>
        </div>
      </div>
    )
  }
}

export default App;
