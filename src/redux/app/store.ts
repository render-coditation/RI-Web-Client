import { createStore, applyMiddleware } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage'
import { composeWithDevTools } from 'redux-devtools-extension'

import { rootReducer, combineReducer } from './root-reducer'

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['SnackBarStatus'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)))

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof combineReducer>
export const persistor = persistStore(store)
