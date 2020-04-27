import { connectRouter, routerMiddleware } from 'connected-react-router'
import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit'

import history from '../utils/history'

import problemsReducer from './problemsModule'
import errorsReducer from './errorsModule'
import linksReducer from './linksModule'

const rootReducer = combineReducers({
  router: connectRouter(history),
  problems: problemsReducer,
  errors: errorsReducer,
  links: linksReducer,
})

const createStore = () => {
  const middleware = [routerMiddleware(history), ...getDefaultMiddleware({ serializableCheck: false })]

  const store = configureStore({
    reducer: rootReducer,
    middleware,
    devTools: process.env.NODE_ENV !== 'production',
  })

  return store
}

export default createStore
