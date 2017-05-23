//@flow

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {compose, lifecycle, setDisplayName, setPropTypes} from "recompose";
import {ConnectMock} from './components/ConnectMock';
const {connect} = ConnectMock();
import UserTile from "./components/UserTile"
import BaseHoc from "./components/BasicHoc"
import {ColorChangeHoc} from "./components/ColorChangeHoc";
import {Widget} from "./components/Widget";
import {ReduxWidget} from "./components/ReduxWidget";
import {fakeApi} from "./fakeApi";
import {UserWidget} from "./components/UserWidget";
import {HeadBar} from "./components/HeadBar";

import './App.scss';
import {FilteredUsers, UserWidgetsList} from "./components/UserWidgetsList";

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


const withUserFetch = lifecycle({
  // get initial state nie dziala
  // getInitialState() {
  //   return {user: {name: "asd"}}
  // },
  // bedzie callowane zawsze przy did mount
  componentDidMount(){
    fakeApi.getUser()
      .then(user => this.setState({user})) // w tym wypadku przekazuje tak naprawde jako prop
  }
});

const UserWidgetWithApi = withUserFetch(({user}) =>
  <UserWidget user={user}/>)

const ColorChangingWrappedUser = colorChangingWrappedEnchancement((props) =>
  <UserTile {...props}></UserTile>);

const YoungUsers = FilteredUsers({rangeEnd: 21});
const OldUsers = FilteredUsers({rangeStart: 36});
const BloomingUsers = FilteredUsers({rangeStart: 24, rangeEnd: 40});


class App extends Component {
  render() {
    return (
      <div className="App">
        <HeadBar/>
        <div className="users-container">
          <UserTile name="Rafał"></UserTile>
          <WrappedUser name="Krzyś"></WrappedUser>
          <ColorChangingUser name="Asia"></ColorChangingUser>
          <ColorChangingWrappedUser name="Asia"></ColorChangingWrappedUser>
        </div>
        <div className="widgets-container">
          <Widget secret="To sekret"/>
          <ReduxWidget secret="to też..."/>
          <UserWidgetWithApi/>
          <UserWidgetsList name="All" users={fakeApi.getUsersNow()}/>
          <BloomingUsers name="In Prime" users={fakeApi.getUsersNow()}/>
          <YoungUsers name="Young" users={fakeApi.getUsersNow()}/>
          <OldUsers name="Oldies" users={fakeApi.getUsersNow()}></OldUsers>
        </div>
      </div>
    )
  }
}

export default App;
