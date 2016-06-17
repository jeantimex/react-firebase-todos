import React, { Component, PropTypes } from 'react';

import 'app.scss';

class App extends Component {
    static propTypes = {
        className: PropTypes.string,
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>todo app</div>
        );
    }
}

export default App;
