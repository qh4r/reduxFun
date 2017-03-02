import {FETCH_USERS} from "./types";

export function fetchUsers() {
    return {
        type: FETCH_USERS,
        payload: [{
            name: "Rafał"
        }, {
            name: "Asia"
        }, {
            name: "Mateusz"
        }, {
            name: "Gabi"
        }
        ]
    }
}