import React from 'react';

export function ConnectMock() {
  return {
    connect: () =>
      BaseComponent =>
        props =>
          <BaseComponent
            {...props}
            dispatch={({type}) => console.log(`${type} dispatched`)}/>
  }
}