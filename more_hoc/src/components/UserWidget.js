import React from 'react';
import {branch, renderComponent} from "recompose";

const UserData = ({user}) =>
  <div>
    {user.name} <span className="user-nickname">{user.nickname}</span> ({user.age})
  </div>

const Loader = branch(
  ({user}) => !user, // jesli ten predykat jest spelniony to pokazuje sie branch (tutaj loader)
  renderComponent(() => <span>Loading...</span>) // koniecznie trzeba uzyc render component
);

const UserDataWithLoader = Loader(UserData);

export const UserWidget = ({user}) => {
  return (
    <div className="widget user-widget">
      <UserDataWithLoader user={user}/>
    </div>
  )
}



//poprzednia wersja
// const UserWidget = ({user}) => {
//   return (
//     <div className="widget user-widget">
//       {user ? <div>
//         {user.name} <span className="user-nickname">{user.nickname}</span> ({user.age})
//       </div> : <span>Loading...</span>}
//     </div>
//   )