import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "remote-redux-devtools";
import thunk from "redux-thunk";
import { countryReducer } from "./country/reducers";

export const rootReducer = combineReducers({
  country: countryReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const useDevTools = process.env.NODE_ENV === "development";

const middleware = [thunk];
const compose = composeWithDevTools({
  realtime: true,
  hostname: "localhost",
  port: 8000,
});

const store = createStore(
  rootReducer,
  useDevTools
    ? compose(applyMiddleware(...middleware))
    : applyMiddleware(...middleware)
);

export default store;
