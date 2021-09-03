import style from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";
import js from '../common/photo/iconSkills/javascript.jpg'
import mu from '../common/photo/iconSkills/materialUI.png'
import ts from '../common/photo/iconSkills/typescript.png'
import css from '../common/photo/iconSkills/css.jpg'
import restAPI from '../common/photo/iconSkills/restAPI.png'
import sb from '../common/photo/iconProject/storybook.png'
import redux from '../common/photo/iconSkills/redux.jpg'
import react from '../common/photo/iconSkills/react.png'
import git from '../common/photo/iconSkills/git.png'
import unitTest from '../common/photo/iconProject/unitTesting.jpg'
import ajax from '../common/photo/iconSkills/ajax.jpg'
import axios from '../common/photo/iconSkills/axios.png'


export function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <a name={'skills'}/>
                <h2 className={style.title}>Навыки</h2>
                <div className={style.skills}>
                    <Skill title={'Javascript'} icon={js}/>
                    <Skill title={'Typescript'} icon={ts}/>
                    <Skill title={'React'} icon={react}/>
                    <Skill title={'Redux'} icon={redux}/>
                    <Skill title={'CSS3'} icon={css}/>
                    <Skill title={'REST API'} icon={restAPI}/>
                    <Skill title={'Unity test'} icon={unitTest}/>
                    <Skill title={'Material UI'} icon={mu}/>
                    <Skill title={'Storybook'} icon={sb}/>
                    <Skill title={'GitHub'} icon={git}/>
                    <Skill title={'Ajax'} icon={ajax}/>
                    <Skill title={'Axios'} icon={axios}/>
                </div>
            </div>
        </div>
    );
}