import { combineReducers } from 'redux';
import statements from './statementReducer';
import user from './userReducer';

import topic from './topicReducer';
import userChallenges from './userChallengesReducer';
import debates from './debatesReducer';

export default combineReducers({
    statements,
    user,
    users: (state = []) => state,
    topic,
    userChallenges,
    debates,
});
