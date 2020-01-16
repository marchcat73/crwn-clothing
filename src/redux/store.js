import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import thunk from "redux-thunk";

import persistedReducer from "./root-reducer";

const middlewares = [thunk];

if (process.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(
  persistedReducer,
  applyMiddleware(...middlewares)
);

export const persiststor = persistStore(store);

export default { store, persiststor };
