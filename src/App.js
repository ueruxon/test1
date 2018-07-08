import React from 'react';

import styles from './main.css';

import AddRecipient from './containers/addRecipient';
import RecipientList from './containers/recipientList';

export default class App extends React.Component {
    render() {
        return (
            <div className={styles.wrapper}>
                <AddRecipient />
                <RecipientList />
            </div>
        );
    }
}
