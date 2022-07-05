// 创建redux:
// 1.引入redux
// 2.createStore(reducer)
// import { createStore } from "redux";
import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit'
import TabbarReducer from './reducers/TabbarReducer'
import CityReducer from './reducers/CityReducer'
import CinemaListReducer from './reducers/CinemaListReducer'
import reduxThunk from 'redux-thunk'
import reduxPromise from 'redux-promise'

const reducer = combineReducers({
    TabbarReducer,
    CityReducer,
    CinemaListReducer
})
const store = configureStore({ reducer }, applyMiddleware(reduxThunk, reduxPromise))
export default store

// redux的reducer要求是个纯函数：
// 1. 对外界没有副作用
// 2. 相同的输入得到同样的输出

