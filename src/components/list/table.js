import React from 'react';

import styles from './index.css';

import TableItem from './tableItem';

const Table = ({ recipients, handleSelect, sendingToRecipient }) => (
    <table>
        <thead>
            <tr>
                <th style={{ width: '70px' }} />
                <th className={styles.tableHeadTh}>Email</th>
                <th className={styles.tableHeadTh}>Name</th>
                <th className={styles.tableHeadTh}>Status</th>
                <th className={styles.tableHeadTh}>Action</th>
            </tr>
        </thead>
        <tbody>
            {recipients.map(recipient => (
                <TableItem
                    key={recipient.id}
                    recipient={recipient}
                    handleSelect={handleSelect}
                    sendingToRecipient={sendingToRecipient}
                />
            ))}
        </tbody>
    </table>
);

export default Table;
