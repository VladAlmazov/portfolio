import React from "react";
import styles from './Nav.module.css';

export function Nav () {
    return (
        <div className={styles.nav}>
            <a name={'homepage'}/>
            <a href='#homepage'>Главная</a>
            <a href='#skills'>Навыки</a>
            <a href='#projects'>Проекты</a>
            <a href='#contacts'>Контакты</a>
        </div>
    );
}