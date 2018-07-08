import React from 'react';

import styles from './index.css';

const Item = ({ recipient, handleSelect, sendingToRecipient }) => {
    const status = recipient.status ? 'Sent' : 'Unsent';

    return (
        <tr className={styles.trItem}>
            <th style={{ width: '70px' }}>
                <label className={styles.labelWrap}>
                    <input
                        type="checkbox"
                        onClick={() => handleSelect(recipient.id)}
                    />
                    <span className={styles.checkmark} />
                </label>
            </th>
            <th>{recipient.email}</th>
            <th>{recipient.name}</th>
            <th>{status}</th>
            <th>
                {recipient.status ? null : (
                    <button
                        className={styles.btn}
                        onClick={() => sendingToRecipient(recipient.id)}
                    >
                        Send
                    </button>
                )}
            </th>
        </tr>
    );
};

export default Item;
