import React from 'react';
import {componentFromProp, withProps, compose} from "recompose";

export const CustomizableLink =
  withProps(({type = 'a', to = '#'}) =>
    type === 'a'
      ? {type, href: to}
      : {
      type, onClick(e){
        window.location = to
      }
    })(componentFromProp('type')); // component from prop tworzy komponent na postawie property


