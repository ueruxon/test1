import {
    ADD_RECIPIENT,
    FETCH_RECIPIENT,
    DELETE_RECIPIENT,
    SEND_RECIPIENT,
} from '../actions/actionTypes';

const initialState = {
    recipients: [],
};

const changeRecipient = (recipient) => {
    if (!Array.isArray(recipient)) {
        return { ...recipient, selected: false };
    }

    return recipient.map(item => ({
        ...item,
        selected: false,
    }));
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_RECIPIENT: {
            return { ...state, recipients: changeRecipient(action.payload) };
        }
        case ADD_RECIPIENT:
            return {
                ...state,
                recipients: [
                    ...state.recipients,
                    changeRecipient(action.payload),
                ],
            };
        case DELETE_RECIPIENT: {
            const deletingRecipient = state.recipients.filter(recipient =>
                    !action.payload.find(item => recipient.id === item.id));

            return { ...state, recipients: deletingRecipient };
        }
        case SEND_RECIPIENT: {
            const updateRecipients = state.recipients.map((recipient) => {
                if (recipient.id === action.payload.id) {
                    return {
                        ...recipient,
                        status: true,
                    };
                }
                return recipient;
            });
            return { ...state, recipients: updateRecipients };
        }
        default:
            return state;
    }
}
