import {useState} from "react";

import styles from "./Message.module.css"

export function Message(props) {
    const [title] = useState('This title is taken from useState function');

    return(
        <>
            <h1 className={styles.h1}>{title}</h1>
            <p className={styles.p}>{props.message}</p>
        </>
    )
}