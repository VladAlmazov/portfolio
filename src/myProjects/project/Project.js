import style from './Project.module.css';

export function Project(props) {
    return (
        <div className={style.project}>
            <div>
                <img src={props.icon} alt={'Icon'}/>
                <h3>
                    <a href={props.link}>
                        {props.title}
                    </a>
                </h3>
            </div>
            <span className={style.description}>
                {props.description}
                </span>
            <div>
                <span className={style.title}>
                Стек технологий которые использовались:
                </span>
                <div className={style.technologies}>
                    {props.technologies}
                </div>
            </div>
        </div>
    );
}