import React, { Component, PropTypes } from 'react';
import firebase from 'firebase';

import 'app.scss';

class App extends Component {
    static propTypes = {
        className: PropTypes.string,
    };

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        // Initialize Firebase
        const config = {
            apiKey: 'AIzaSyB3RPtTjHF_8JmPnZdEd69B91-E9jtRor0',
            authDomain: 'todos-aefcd.firebaseapp.com',
            databaseURL: 'https://todos-aefcd.firebaseio.com',
            storageBucket: '',
        };

        const app = firebase.initializeApp(config);

        const email = 'jean.timex@gmail.com';
        const password = '1234566';

        firebase.auth().signInWithEmailAndPassword(email, password).then(function (user) {
            const ref = firebase.database().ref();
            const todosRef = ref.child('todos');
            todosRef.push({
                id: '1',
                text: 'Hello World',
            });
        }, function (error) {
            console.error(error);
        });
    }

    render() {
        return (
            <div>todo app</div>
        );
    }
}

export default App;
