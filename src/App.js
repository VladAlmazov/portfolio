import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {MyProjects} from "./myProjects/MyProjects";
import {Contacts} from "./contacts/Contacts";
import {Footer} from "./footer/Footer";

export function App () {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <MyProjects/>
            <Contacts/>
            <Footer/>
        </div>
    );
}