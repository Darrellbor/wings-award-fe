import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { environment } from 'shared/config';

//reducers
import voteReducer from './reducers/vote';

//redux dev tools
const composeEnhancers =
  (environment === 'development'
    ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ((window as any)['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose)
    : null) || compose;

//combining all reducers
const rootReducer = combineReducers({
  vote: voteReducer,
});

const persistConfig = {
  key: 'wingsAwardApp',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

//creating a redux store
const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
