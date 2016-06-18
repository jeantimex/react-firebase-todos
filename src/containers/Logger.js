import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router'
import { login } from '../actions';

class Logger extends Component {
    static propTypes = {
        loginUser: PropTypes.func,
        user: PropTypes.object,
        error: PropTypes.object,
    };

    componentWillReceiveProps(nextProps) {
        const { user } = nextProps;

        if (user) {
            browserHistory.push('/');
        }
    }

    render() {
        let email;
        let password;

        const { loginUser } = this.props;

        return (
            <div>
                <form onSubmit={ e => {
                    e.preventDefault();
                    
                    if (!email.value.trim() || !password.value.trim()) {
                        return;
                    }

                    loginUser(email.value, password.value);

                    email.value = '';
                    password.value = '';
                } }>
                  <input ref={ node => {
                      email = node
                  } } />
                  <input ref={ node => {
                      password = node
                  } } />
                  <button type="submit">
                      Login
                  </button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.auth.user,
    error: state.auth.error,
});

const mapDispatchToProps = (dispatch) => {
    return {
        loginUser: (email, password) => {
            dispatch(login(email, password));
        },
    };
};

Logger = connect(
    mapStateToProps,
    mapDispatchToProps
)(Logger);

export default Logger;
