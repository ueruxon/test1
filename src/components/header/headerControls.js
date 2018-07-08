import React from 'react';

import styles from './index.css';

const HeaderControls = ({ values }) => (
    <div>
        <form
            className={styles.container}
            onSubmit={event => values.addRecipient(event)}
        >
            <div>
                <p className={styles.text}>Email</p>
                <input
                    className={styles.inputItem}
                    type="text"
                    placeholder="johndoe@gmail.com"
                    onChange={event => values.setEmail(event.target.value)}
                    value={values.email}
                />
            </div>
            <div>
                <p className={styles.text}>Name</p>
                <input
                    className={styles.inputItem}
                    type="text"
                    placeholder="John Doe"
                    onChange={event => values.setName(event.target.value)}
                    value={values.name}
                />
            </div>
            <button className={styles.addButton}>Add Email</button>
        </form>
    </div>
);

export default HeaderControls;
