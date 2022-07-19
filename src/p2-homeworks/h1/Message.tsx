import React from 'react';
import styles from "./Message.module.css"

type propsMessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: propsMessageType) {

    return (
        <div className={styles.messageItem}>
            <img className={styles.avatar} src={props.avatar}/>
            <div className={styles.tail} />

            <div className={styles.messageBody}>
                <div className={styles.messageHeader}>
                    <div className={styles.userName}>{props.name}</div>
                    <div className={styles.messageDate}>{props.time}</div>
                </div>
                <div className={styles.messageText}>{props.message}</div>
            </div>

        </div>
    )
}

export default Message
