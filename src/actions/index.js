import axios from 'axios';

import {
    FETCH_RECIPIENT,
    ADD_RECIPIENT,
    DELETE_RECIPIENT,
    SEND_RECIPIENT,
} from './actionTypes';

const ROOT_URL = 'https://5b3b45b7e7659e0014969488.mockapi.io/api/db/users';

export const fetchRecipient = () => dispatch =>
    axios
        .get(`${ROOT_URL}`)
        .then(response => response.data)
        .then(data => dispatch({ type: FETCH_RECIPIENT, payload: data }))
        .catch(erorr => console.error(erorr));

export const addRecipient = resipient => dispatch =>
    axios
        .post(`${ROOT_URL}`, resipient)
        .then(response => response.data)
        .then(data => dispatch({ type: ADD_RECIPIENT, payload: data }))
        .catch(erorr => console.error(erorr));

export const deleteRecipient = resipients => (dispatch) => {
    const toDelete = resipients.map(resipient =>
        axios
            .delete(`${ROOT_URL}/${resipient.id}`)
            .then(response => response.data)
            .catch(erorr => console.error(erorr)));
    return Promise.all(toDelete).then(data =>
        dispatch({
            type: DELETE_RECIPIENT,
            payload: data,
        }));
};

export const sendMailToRecipient = id => dispatch =>
    axios
        .put(`${ROOT_URL}/${id}`, { status: true })
        .then(response => response.data)
        .then(data =>
            dispatch({
                type: SEND_RECIPIENT,
                payload: data,
            }))
        .catch(erorr => console.error(erorr));
