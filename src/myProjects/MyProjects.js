import style from './MyProjects.module.css';
import styleContainer from '../common/styles/Container.module.css'
import {Project} from "./project/Project";
import todolist from '../common/photo/iconProject/todolist.jpg'
import socialNetwork from '../common/photo/iconProject/socialNetwork.jpg'
import unitTesting from '../common/photo/iconProject/unitTesting.jpg'
import storybook from '../common/photo/iconProject/storybook.png'
import typescript from '../common/photo/iconProject/typescript.jpeg'
import counter from '../common/photo/iconProject/counter.png'
import bootstrap from '../common/photo/iconProject/bootstrap.png'


export function MyProjects() {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <a name={'projects'}/>
                <h2 className={style.title}>Проекты</h2>
                <div className={style.projects}>
                    <Project title={'TodoList'}
                             description={'SPA приложение которое можно использовать для записи важных дел, планов, составления списков и прочее.'}
                             technologies={'React+Redux, Typescript, Material UI, CSS, Axios'}
                             gitHubLink={'https://github.com/VladAlmazov/todolist'}
                             icon={todolist}
                    />
                    <Project title={'Social Network'}
                             description={'Большая социальная сеть с такими возможностями как авторизация, добавление постов в профиль, отправкой сообщений, добавление/удаление друзей и прочее.'}
                             technologies={'React+Redux, Typescript, Ajax, CSS, Axios'}
                             gitHubLink={'https://github.com/VladAlmazov/social_network'}
                             icon={socialNetwork}
                    />
                    <Project title={'Native JS(Unit Testing)'}
                             description={'Базовый нативный JS для лучшего понимая происходящего в React, покрыт тестами.'}
                             technologies={'React, Typescript, Unit tests'}
                             gitHubLink={'https://github.com/VladAlmazov/native-js-hometasks'}
                             icon={unitTesting}
                    />
                    <Project title={'Native JS(Storybook)'}
                             description={'Тот же нативный JS, но уже с использованием хуков React. Также добавлен Storybook.'}
                             technologies={'React, Typescript, Storybook'}
                             gitHublink={'https://github.com/VladAlmazov/react-kabzda-hometasks'}
                             icon={storybook}
                    />
                    <Project title={'Native JS(Typescript)'}
                             description={'Нативный JS с использованием Typescript. Реализован конвертер валют.'}
                             technologies={'React+Redux, Typescript, CSS'}
                             gitHubLink={'https://github.com/VladAlmazov/native-js-typescript-React_Redux'}
                             icon={typescript}
                    />
                    <Project title={'Counter'}
                             description={'Стилизированный счетчик.'}
                             technologies={'React, Typescript, CSS'}
                             gitHubLink={'https://github.com/VladAlmazov/examination_counter'}
                             gitHubPagesLink={'https://vladalmazov.github.io/examination_counter/'}
                             icon={counter}
                    />
                    <Project title={'Bootstrap'}
                             description={'Страница продажи курсов.'}
                             technologies={'HTML, CSS, Bootstrap5'}
                             gitHubLink={'https://github.com/VladAlmazov/bootstrap-project'}
                             gitHubPagesLink={'https://vladalmazov.github.io/bootstrap-project/'}
                             icon={bootstrap}
                    />
                </div>
            </div>
        </div>
    );
}