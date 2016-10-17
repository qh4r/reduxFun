export function selectBook(book) {
    // musi zwracac type i cos
    console.log(book);
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
}