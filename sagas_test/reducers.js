export function counter1(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT_1':
      return state + 1;
    case 'DECREMENT_1':
      return state - 1
    default:
      return state
  }
}

export function counter2(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT_2':
            return state + 1;
        case 'DECREMENT_2':
            return state - 1;
        default:
            return state
    }
}