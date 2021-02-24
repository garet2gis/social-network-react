import './App.css';
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import React from "react";
import {HashRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {initialize} from "./redux/app-reducer";
import {compose} from "redux";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";

class App extends React.Component {
    componentDidMount() {
        this.props.initialize();
    }

    render() {
        if (!this.props.isInitialized) {
            return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/profile/:userId?'
                           render={() => <ProfileContainer/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/login' render={() => <Login/>}/>

                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isInitialized: state.app.isInitialized
})


const AppContainer = compose(
    connect(mapStateToProps, {initialize})
)(App);

const MainApp = () => {
    return (
        <HashRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </HashRouter>
    )
}

export default MainApp;