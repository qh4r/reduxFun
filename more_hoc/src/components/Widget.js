// @flow

type WidgetProps = {
  secret: string,
  detailsVisible: boolean,
  setVisible: () => void
}

import React from 'react';
import { withState } from 'recompose';

const Header = () =>
  <div className="widget-header">Pieknie!</div>;

const Body = () =>
  <div className="widget-body">Sekret blisko</div>

const Details = ({secret, detailsVisible}) => <div
  className={`widget-details ${detailsVisible ? 'widget-open' : ''}`}>
  {secret}
</div>

//withState( nazwaZmiennejStanu, funkcjaZmiany, wartoscPoczatkowa)
export const Widget = withState('detailsVisible', 'setVisible', false)(({secret, detailsVisible, setVisible}: WidgetProps) => {
  return <div className="widget"
              onClick={() => setVisible(x => !x)}>
    <Header/>
    <Body/>
    <Details detailsVisible={detailsVisible} secret={secret}/>
  </div>
})
