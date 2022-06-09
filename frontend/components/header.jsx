import Image from 'next/image';

import styles from '../styles/Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.contentHeader}>
                <h1 className={styles.title}>
                    Preview Insta Feed
                </h1>
                <div className={styles.btnHeader}>
                    <button><Image src="/images/refresh.png" width="25px" height="25px" alt='Refresh' title='Refresh' /></button>
                    <button><Image src="/images/plus.png" width="25px" height="25px" alt='Add Photo' title='Add Photo' /></button>
                    <button><Image src="/images/log-out.png" width="25px" height="25px" alt='Logout' title='Logout' /></button>
                </div>
            </div>
        </header>
    )
}