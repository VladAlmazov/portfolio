import style from './Skill.module.css';

export function Skill (props) {
    return (
        <div className={style.skill}>
            <div>
                <img src={props.icon} alt="Skill icon"/>
            </div>
            <h3>{props.title}</h3>
        </div>
    );
}