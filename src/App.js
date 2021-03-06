import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import DebatePage from './pages/DebatePage';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import ImagePage from './pages/ImagePage';
import RankingsPage from './pages/RankingsPage';
import AboutPage from './pages/AboutPage';
import ChallengePage from './pages/ChallengePage';
import TutorialPage from './pages/TutorialPage';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import masterReducer from './reducers/masterReducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = window.initialState;

const composeEnhancers = composeWithDevTools({});

const App = ({}) => {
    return (<BrowserRouter>
        <Provider store={ createStore(masterReducer, initialState, composeEnhancers(applyMiddleware(thunk))) }>
        <Switch>
            <Route path="/home" component={ HomePage } />
            <Route path="/debate" component={ DebatePage } />
            <Route path="/rankings" component={ RankingsPage } />
          {/*  <Route path="/about" component={ AboutPage } />*/}
            <Route path="/challenge" component={ ChallengePage } />
            <Route path="/image" component={ ImagePage } />
            <Route path="/profile/:id" component={ ProfilePage } />
{/*
            <Route path="/tutorial" component={ TutorialPage } />
*/}
        </Switch>
        </Provider>
    </BrowserRouter>)
};

export default App;
// export default ({page}) => {
//     let component;
//     switch(page) {
//         case 'debate': {
//             component = <DebatePage/>;
//             break;
//         }
//         case 'profile': {
//             component = <ProfilePage/>;
//             break;
//         }
//         case 'image': {
//             component = <ImagePage/>;
//             break;
//         }
//         case 'rankings': {
//             component = <RankingsPage />;
//             break;
//         }
//         case 'about': {
//             component = <AboutPage/>;
//             break;
//         }
//         case 'tutorial': {
//             component = <TutorialPage/>;
//             break;
//         }
//         default: {
//             component = <HomePage />;
//             break;
//         }
//     }
//
//     return component;
// }
