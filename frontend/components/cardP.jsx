import styles from '../styles/CardP.module.css';

export default function CardP({ photoP }) {
    return (
        <div className={styles.card}>
            <div className={styles.delete}>
                <img src="/images/trash-red.png" />
            </div>
            <img src={photoP} />
        </div>
    )
}