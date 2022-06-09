import styles from '../styles/Card.module.css';

export default function Card({ photo }) {
    return (
        <div className={styles.card}>
            <img src={photo} />
        </div>
    )
}