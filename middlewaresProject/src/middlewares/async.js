export default function ({dispatch}) {
  return next =>
    action => {
      if (action.payload && (!action.payload.then || !(typeof action.payload.then == "function"))) {
        return next(action);
      }
      // disptawch przesyla wszystko od poczatku kolejki middlewearow
      action.payload.then(result => {
        return dispatch({...action, payload: result.data});
      }).catch(() => {
        return dispatch({...action, payload: null});
      })
    }
}