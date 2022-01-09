import {combineReducers, createStore} from 'redux'
import  {statusReducer} from './index'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
}
const rootReducer = combineReducers({
    status:statusReducer
})
const persistedReducer = persistReducer(persistConfig, rootReducer)




   let store = createStore(persistedReducer)
  export  let persistor = persistStore(store)

export  default store





