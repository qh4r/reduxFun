// w tym wypadku state to nie stan aplikacji
// a stan za ktory odpowiedzialny jest ten reducer
export default function (state = null, action) {
    switch (action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
        default:
            return state;
    }
}