import React from 'react';
import {branch, renderComponent, renderNothing} from "recompose";

//renderNothing

const UserData = ({user}) =>
  <div>
    {user.name} <span className="user-nickname">{user.nickname}</span> ({user.age})
  </div>

const Loader = branch(
  ({user}) => !user, // jesli ten predykat jest spelniony to pokazuje sie branch (tutaj loader)
  renderComponent(() => <span>Loading...</span>) // koniecznie trzeba uzyc render component
);



const Nothing = renderNothing(); // render nothing ni renderuje niczego
      // - przydaje sie wlasnie do branchowania i nie renderowania czegos w branchu

//branche mozna laczyc composem
//compose(
// branch(...),
// branch(...)
//)
const UserDataWithLoader = Loader(UserData);

export const UserWidget = ({user}) => {
  return (
    <div className="widget user-widget">
      <UserDataWithLoader user={user}/>
      <Nothing></Nothing>
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