import React from 'react';
import PropTypes from 'prop-types';
import {
  compose, onlyUpdateForKeys, onlyUpdateForPropTypes, setPropTypes, withPropsOnChange,
  withReducer
} from "recompose";


const PureCalculator = ({state: {value1, value2}, dispatch}) =>
  <div>
    <p>Kalkulator, gdzie 2 zmienna powoduje przeliczenie</p>
    <input value={value1} onChange={(e) => dispatch({type: 'setValue1', payload: e.target.value})} type="number"/>
    *
    <input value={value2} onChange={(e) => dispatch({type: 'setValue2', payload: e.target.value})} type="number"/>
    <WrappedResult value1={value1} value2={value2}/>
  </div>

export const Calculator = withReducer('state', 'dispatch', (state, action) => {
  switch (action.type) {
    case 'setValue1':
      return {...state, value1: action.payload};
    case 'setValue2':
      return {...state, value2: action.payload};
    default:
      return state;
  }
}, {value1: 0, value2: 0})(PureCalculator);

const Result = ({value1, value2}) =>
  <span style={{color: 'red'}}>{Number(value1) * Number(value2)}</span>


//withPropsOnChange jako pierwszy argument przyjmuje tablice propert i tylko te wymienione beda powodowaly zmiany
// w dzieciach. W tym wypadku wartosci w kalkulatorze zmienia sie dopiero gdy zmianie ulegnie zmienna 2, zmienna 1 nie
// spowoduje wyswietlenia nowego wyniku

// WSZYSTKIE PONIZSZE ROBIA TO SAMO

const WrappedResult2 = withPropsOnChange(
  ['value2'],
  ({value1, value2}) => ({value1, value2})
)(Result);

// rownowaznik tego co powyzej
const WrappedResult1 = onlyUpdateForKeys(['value2'])(Result);

//kolejny rownowaznik
const WrappedResult = compose(
  onlyUpdateForPropTypes,
  setPropTypes({
      value2: PropTypes.string.isRequired
    })
)(Result); // TWORZENIE KOMPONENTOW w compose przebiega od wewnatrz do zewnatrz (sa wrapowane koljno)
// WIDAC TO NA TYM PRZYKLADZIE

// FUNKCJA pure - sprawia ze update (rerender) nastepuje tylko po realnej zmianie wartosci przekazywanych propsow
// onlyUpdateForKeys wymaga podania pol dla ktorych bedzie wystepowal update
// jest tez onlyupdateForPropTypes

// jest jrszcze should update wrapujace should component update
// porownujemy previous i next propsy i zwracamy boolean

