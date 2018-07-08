import React from 'react';
import { connect } from 'react-redux';

import Header from '../components/header/header';

import { addRecipient } from '../actions/index';

class AddRecipipient extends React.Component {
    state = {
        name: '',
        email: '',
    };

    addNewRecipient = (event) => {
        event.preventDefault();

        if (this.state.name === '' && this.state.email === '') return;
        if (this.state.name === '' || this.state.email === '') return;

        const recipient = {
            name: this.state.name,
            email: this.state.email,
        };

        this.props.addRecipient(recipient);
        this.setState({ name: '', email: '' });
    };

    setName = (value) => {
        this.setState({ name: value });
    };

    setEmail = (value) => {
        this.setState({ email: value });
    };

    render() {
        return (
            <div>
                <Header
                    addRecipient={this.addNewRecipient}
                    setName={this.setName}
                    setEmail={this.setEmail}
                    {...this.state}
                />
            </div>
        );
    }
}

export default connect(
    null,
    { addRecipient },
)(AddRecipipient);
