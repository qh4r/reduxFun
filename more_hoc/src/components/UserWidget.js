import React from 'react';

export const UserWidget = ({user}) => {
  return (
    <div className="widget user-widget">
      {user ? <div>
        {user.name} <span className="user-nickname">{user.nickname}</span> ({user.age})
      </div> : <span>Loading...</span>}
    </div>
  )
}