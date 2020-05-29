import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth4834Reducer from '../features/EmailAuth4834/redux/reducers';
import EmailAuth4833Reducer from '../features/EmailAuth4833/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth4834: EmailAuth4834Reducer,
EmailAuth4833: EmailAuth4833Reducer,
EmailAuth: EmailAuthReducer,

});