export const createSocketMiddleware = io => config => {
  const socket = io();
  return store => next => action => {
    Object.keys(config).forEach(key => {
      if (action.type === key) {
        socket.emit(config[key](action));
      }
    });
    let result = next(action);
    return result;
  }
}