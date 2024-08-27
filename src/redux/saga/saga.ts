import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import { decrement, increment } from "../Actions";
import { SagaIterator } from "redux-saga";

export function* incrementS(): SagaIterator {
  try {
    const response = yield call(api.get, "/users/teste");
    console.log(response);
    put(increment(2));
  } catch (error) {}
}

export function* decrementS() {
  try {
    yield call(api.get, "users");
    put(decrement(2));
  } catch (error) {}
}
