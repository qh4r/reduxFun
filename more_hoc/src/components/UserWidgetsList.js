import React from 'react';
import {UserWidget} from "./UserWidget";
import {mapProps} from "recompose";

export const UserWidgetsList = ({users, name}) =>
  <div className="users-list">

    <ul>
      <div className="label">{name}</div>
      {users.map((user, i)=>
        <li key={i}>
          <UserWidget user={user}></UserWidget>
        </li>
      )}
    </ul>
  </div>;

// trzeba zadbac o to by przekazac wszystkie propsy bo inaczej zostana utracone
export const FilteredUsers = ({rangeStart, rangeEnd}) =>
  mapProps(({name, users}) => ({
    name,
    users: users.filter(x => (rangeStart ? x.age > rangeStart : true) && (rangeEnd ? x.age < rangeEnd : true))
  }))(UserWidgetsList);