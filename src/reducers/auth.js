const auth = (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                user: action.user,
            };

        case 'LOGIN_FAILED':
            return {
                ...state,
                error: action.error,
            };

        case 'SET_UID':
            return {
                ...state,
                uid: action.uid,
            };
        default:
            return state;
    }
}

export default auth;
