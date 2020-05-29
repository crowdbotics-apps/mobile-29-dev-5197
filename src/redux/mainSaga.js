import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth4841Saga from '../features/EmailAuth4841/redux/sagas';
import EmailAuth4834Saga from '../features/EmailAuth4834/redux/sagas';
import EmailAuth4833Saga from '../features/EmailAuth4833/redux/sagas';
import EmailAuthSaga from '../features/EmailAuth/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
EmailAuth4841Saga,
EmailAuth4834Saga,
EmailAuth4833Saga,
EmailAuthSaga,
    
  ]);
}