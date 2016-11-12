import { combineReducers } from 'redux';
import ItemsReducers from './reducer_items';
import CurrentUserReducer from './reducer_current_user';
import { MyProfileReducer } from './reducer_profile';

const rootReducer = combineReducers({
  myItems: ItemsReducers,
  currentUser: CurrentUserReducer,
  myProfile: MyProfileReducer,
});

export default rootReducer;