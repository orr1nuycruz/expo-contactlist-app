import {combineReducers } from '@reduxjs/toolkit'
import ContactReducer from "../slices/contact"

export const reducer =  combineReducers({
    // login: LoginReducer,
    contact: ContactReducer

});