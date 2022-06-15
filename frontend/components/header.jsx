import Image from 'next/image';
import { useState } from 'react';

import styles from '../styles/Header.module.css';

export default function Header() {
    const [modal, setModal] = useState(false);

    function Modal() {
        setModal(!modal);
    }

    function AddPhoto() {

    }

    function refresh() {
        location.reload();
    }
    return (
        <header className={styles.header}>
            <div className={styles.contentHeader}>
                <h1 className={styles.title}>
                    Preview Insta Feed
                </h1>
                <div className={styles.btnHeader}>
                    <button><Image src="/images/refresh.png" width="25px" height="25px" alt='Refresh' title='Refresh' onClick={refresh} /></button>
                    <button><Image src="/images/plus.png" width="25px" height="25px" alt='Add Photo' title='Add Photo' onClick={Modal} /></button>
                    <button><Image src="/images/log-out.png" width="25px" height="25px" alt='Logout' title='Logout' /></button>
                </div>
            </div>
            {
                modal ?
                    <div className={styles.containerModal}>
                        <div className={styles.modalConfirm}>
                            <input type="file" className={styles.file} />
                            <div className={styles.btnGroup}>
                                <button onClick={AddPhoto} className={styles.btnImport}>Import</button>
                                <button onClickCapture={Modal}>Cancel</button>
                            </div>
                        </div>
                    </div>
                    : ''
            }
        </header>
    )
}