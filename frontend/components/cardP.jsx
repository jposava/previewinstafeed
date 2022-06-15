import styles from '../styles/CardP.module.css';

import axios from 'axios';
import { useState } from 'react';

export default function CardP({ photoP, id }) {
    const [modal, setModal] = useState(false);

    function Modal() {
        setModal(!modal);
    }

    function DeleteFakePost() {
        axios.delete(`http://localhost:8080/deletefakepost/${id}`);
        location.reload();
        setModal(!modal);
    }
    return (
        <div className={styles.card}>
            <div className={styles.delete} onClick={Modal}>
                <img src="/images/trash-red.png" />
            </div>
            <img src={photoP} />
            {
                modal ?
                    <div className={styles.modalConfirm}>
                        <div>
                            <button onClick={DeleteFakePost} className={styles.btnDelete}>Delete</button>
                            <button onClickCapture={Modal}>Cancel</button>
                            <form action="http://localhost:8080/fakepost" method="post" enctype="multipart/form-data">
                                <input type="file" name="file" onClickCapture={Modal} value="Cancel"/>
                            </form>
                        </div>
                    </div>
                    : ''
            }
        </div>
    )
}