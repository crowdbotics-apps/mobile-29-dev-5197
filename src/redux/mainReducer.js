import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth4842Reducer from '../features/EmailAuth4842/redux/reducers';
import EmailAuth4841Reducer from '../features/EmailAuth4841/redux/reducers';
import EmailAuth4834Reducer from '../features/EmailAuth4834/redux/reducers';
import EmailAuth4833Reducer from '../features/EmailAuth4833/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth4842: EmailAuth4842Reducer,
EmailAuth4841: EmailAuth4841Reducer,
EmailAuth4834: EmailAuth4834Reducer,
EmailAuth4833: EmailAuth4833Reducer,
EmailAuth: EmailAuthReducer,

});