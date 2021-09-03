import React from "react";
import style from './Footer.module.css';
import styleContainer from "../common/styles/Container.module.css";


export function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <a href='#homepage' className={style.homepage}>На главную</a>
                <div className={style.footer}>
                    <ul className={style.links}>
                        <li>
                            <a href="https://github.com/VladAlmazov">GitHub</a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/vlad-leno-663089218/">LinkedIn</a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/_almazov13/">Instagram</a>
                        </li>
                        <li>
                            <a href="https://t.me/KickeR7">Telegram</a>
                        </li>
                    </ul>
                    <p className={style.footerEnd}>© 2021 Vladyslav Leno.</p>
                </div>
            </div>
        </div>
    );
}