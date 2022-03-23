import React from "react";
import style from './Main.module.css';
import styleContainer from '../common/styles/Container.module.css'
import avatar from '../common/photo/avatar.jpg'

export function Main() {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span>Привет!</span>
                    <h1>Меня зовут Влад.</h1>
                    <p>Я Front-End разработчик.</p>
                    <h3>Краткая информация обо мне:</h3>
                    <ul className={style.about}>
                        <li>Мне 23 года</li>
                        <li>Закончил НАВД на юридическом факультете. <br/>
                            Прошел курс от <a href='https://it-incubator.by/'>IT-Incubator</a> на Front-End разработчика</li>
                        <li>Опыт в разработке 12 месяцев(обучение)</li>
                        <li>Живу в Ивано-Франковске, но готов к переезду во Львов.</li>
                        <li>E-mail: vladosa113@gmail.com</li>
                    </ul>
                </div>
                <div className={style.photo}>
                    <img alt={'avatar'} src={avatar}/>
                </div>
            </div>
        </div>
    );
}