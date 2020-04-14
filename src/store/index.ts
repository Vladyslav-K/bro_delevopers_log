import { connectRouter, routerMiddleware } from 'connected-react-router'
import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit'

import history from '../utils/history'

import problemsReducer from './problemsModule'

const rootReducer = combineReducers({
  router: connectRouter(history),
  problems: problemsReducer,
})

const createStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [routerMiddleware(history), ...getDefaultMiddleware({ serializableCheck: false })],
    devTools: process.env.NODE_ENV !== 'production',
  })

  return store
}

export default createStore
