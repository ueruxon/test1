import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import {
    fetchRecipient,
    deleteRecipient,
    sendMailToRecipient,
} from '../actions/index';

import NavBar from '../components/navbar/navbar';
import Table from '../components/list/table';

class RecipientList extends React.Component {
    state = {
        recipientsList: [],
        showFilter: 'Show all',
    };

    componentDidMount() {
        this.props.fetchRecipient();
    }

    componentDidUpdate(prevProps, prevState) {
        const { showFilter } = this.state;
        const { recipients } = this.props;

        if (
            prevProps.recipients !== this.props.recipients ||
            prevState.showFilter !== this.state.showFilter
        ) {
            this.setState({
                recipientsList: this.setVisibleRecipients(
                    showFilter,
                    recipients,
                ),
            });
        }
    }

    setVisibleRecipients = (typeFilter, recipients) => {
        switch (typeFilter) {
            case 'Show sent':
                return recipients.filter(recipient => recipient.status);
            case 'Show unsent':
                return recipients.filter(recipient => !recipient.status);
            default:
                return recipients;
        }
    };

    handleShowFilter = (value) => {
        this.setState({
            showFilter: value,
        });
    };

    handleSelect = (id) => {
        this.setState(prevState => ({
            recipientsList: prevState.recipientsList.map((item, i) => {
                if (item.id === id) {
                    return {
                        ...item,
                        selected: !prevState.recipientsList[i].selected,
                    };
                }
                return item;
            }),
        }));
    };

    sendingToRecipient = (id) => {
        this.props.sendMailToRecipient(id);
    };

    deleteSelectRecipient = () => {
        const selectedRecipient = this.state.recipientsList.filter(recipient => recipient.selected);
        this.props.deleteRecipient(selectedRecipient);
    };

    render() {
        const { recipientsList } = this.state;

        return (
            <Fragment>
                <NavBar
                    deleteSelectRecipient={this.deleteSelectRecipient}
                    handleShowFilter={this.handleShowFilter}
                    isActive={this.state.showFilter}
                />
                <div style={{ position: 'relative' }}>
                    <Table
                        recipients={recipientsList}
                        handleSelect={this.handleSelect}
                        sendingToRecipient={this.sendingToRecipient}
                    />
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    recipients: state.recipients,
});

export default connect(
    mapStateToProps,
    { fetchRecipient, deleteRecipient, sendMailToRecipient },
)(RecipientList);
