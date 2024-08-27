import { all, takeLatest } from "redux-saga/effects";

import { incrementS } from "./saga/saga";
import { increment } from "./Actions";

export default function* rootSaga() {
  yield all([takeLatest("counter/increment", incrementS)]);
}
