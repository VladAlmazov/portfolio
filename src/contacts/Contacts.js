import style from './Contacts.module.css';
import styleContainer from '../common/styles/Container.module.css'


export function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <a name={'contacts'}/>
                <h2 className={style.title}>Контакты</h2>
                <form action={'http://localhost:3000/'} method={'POST'} className={style.contacts}>
                    <input placeholder={'Имя'}/>
                    <input placeholder={'E-mail'}/>
                    <textarea placeholder={'Ваше сообщение'}>
                    </textarea>
                </form>
                <button className={style.button}>Отправить</button>

            </div>
        </div>
    );
}