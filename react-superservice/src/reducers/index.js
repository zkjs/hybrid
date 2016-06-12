import { combineReducers } from 'redux';
import ItemsReducer from './reducer_items';
import ActiveItem from './reducer_active_item';

const rootReducer = combineReducers({
  items: ItemsReducer,
  activeItem: ActiveItem
});

export default rootReducer;
