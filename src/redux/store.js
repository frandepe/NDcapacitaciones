import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import CursosReducer from "./actions/cursosdb";
import AvalReducer from "./actions/avaldb";
import LoginReducer from "./login";

const rootReducer = combineReducers({
  user: LoginReducer,
  cursos: CursosReducer,
  aval: AvalReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function genereteStore() {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
}
