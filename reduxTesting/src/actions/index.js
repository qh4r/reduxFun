import { SAVE_COMMENT } from  './types';

export function saveComment(text) {
    return {
        type: SAVE_COMMENT,
        payload: text
    }
}