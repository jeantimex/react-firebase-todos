import firebase from 'firebase';

let nextTodoId = 0;

export const loginSuccess = (user) => ({
    type: 'LOGIN_SUCCESS',
    user,
});

export const loginFailed = (error) => ({
    type: 'LOGIN_FAILED',
    error,
});

export const login = (email, password) =>
    (dispatch) => {
        firebase.auth().signInWithEmailAndPassword(email, password).then(function (user) {
            dispatch(loginSuccess(user));
        }, function (error) {
            dispatch(loginFailed(error));
        });
    };

export const setUID = (uid) => {
    return {
        type: 'SET_UID',
        uid,
    };
}

export const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text,
    };
}

export const setVisibilityFilter = (filter) => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter,
    };
}

export const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id,
    };
}
