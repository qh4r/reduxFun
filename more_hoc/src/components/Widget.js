// @flow

type WidgetProps = {
  secret: string,
  isActive: boolean,
  toggle: () => void
}

import React from 'react';
import { compose, withHandlers, withState } from 'recompose';

//withState( nazwaZmiennejStanu, funkcjaZmiany, wartoscPoczatkowa)
const withToggle = () =>
  compose(
    withState('isActive', 'toggle', false),
    // with handlers sprawia ze dziecko dostanie wymienione funkcje w propertach
    //toggle zostaje przekazane juz przez withState ktore jest wczesniej w kolejce i dodalo swoja dekoracje
    withHandlers({
      show: ({toggle}) => (event) => toggle(true),
      hide: ({toggle}) => (event) => toggle(false),
      toggle: ({toggle}) => (event) => toggle(current => !current)
    })
  )

// const Body = withState('headerVisible', 'setVisible', false)(({headerVisible, setVisible}) =>
//   <div
//     onMouseEnter={() => setVisible(true)}
//     onMouseLeave={() => setVisible(false)}
//     className="widget-body">
//     <span className={`widget-header ${headerVisible ? 'header-active' : ''}`}>Pieknie!</span>
//     Sekret blisko
//   </div>);

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

// export const Widget = withState('detailsVisible', 'setVisible', false)(({secret, detailsVisible, setVisible}: WidgetProps) => {
//   return <div className="widget"
//               onClick={() => setVisible(x => !x)}>
//     <Body/>
//     <Details detailsVisible={detailsVisible} secret={secret}/>
//   </div>
// })

// powyzej wersja uzywajaca withState a ponizej zamieniajaca to na nowy komponent togglujacy

export const Widget = withToggle()(({secret, isActive, toggle}: WidgetProps) => {
  return <div className="widget"
              onClick={() => toggle()}>
    <Body/>
    <Details detailsVisible={isActive} secret={secret}/>
  </div>
})
