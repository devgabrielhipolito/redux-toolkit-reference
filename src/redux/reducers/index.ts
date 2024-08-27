import { combineReducers } from "redux";
import counterSlices from "./counterSlices";
const rootReducer = combineReducers({
  counterSlices,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
