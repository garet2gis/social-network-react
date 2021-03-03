import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import React from "react";
import {Redirect, Switch, HashRouter, Route} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {initialize} from "./redux/app-reducer";
import {compose} from "redux";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";
import withSuspense from "./hoc/withSuspense";
import Footer from "./components/Footer/Footer";
import {AppWrapper, FlexContainer, FlexItemContent} from "./AppStyledComponents";


const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));


class App extends React.Component {
    catchAllUnhandledErrors = (reason, promise) => {
        alert(reason.message);
    }
    componentDidMount() {
        this.props.initialize();
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }

    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }
    render() {
        if (!this.props.isInitialized) {
            return <Preloader/>
        }
        return (
            <AppWrapper>
                <HeaderContainer/>
                <FlexContainer>
                    <Navbar/>
                    <FlexItemContent>
                        <Switch>
                            <Route path='/dialogs' render={withSuspense(DialogsContainer)}/>
                            <Route path='/profile/:userId?'
                                   render={() => <ProfileContainer/>}/>
                            <Route path='/news' render={() => <News/>}/>
                            <Route path='/music' render={() => <Music/>}/>
                            <Route path='/settings' render={() => <Settings/>}/>
                            <Route path='/users' render={() => <UsersContainer/>}/>
                            <Route path='/login' render={() => <Login/>}/>
                            <Redirect exact from="/" to="/profile"/>
                            <Route path='*' render={() => <div>404 NOT FOUND</div>}/>
                        </Switch>
                    </FlexItemContent>
                </FlexContainer>
                <Footer/>
            </AppWrapper>
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