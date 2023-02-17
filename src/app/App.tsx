import './styles/index.scss'
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRooter} from "app/providers/router";
import {Navbar} from "widgets/NavBar";
import {Sidebar} from "widgets/Sidebar";

const App = () => {

    const {theme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar/>
            <div className="content-page">
                <Sidebar/>
                <AppRooter/>
            </div>
        </div>
    );
};

export default App;