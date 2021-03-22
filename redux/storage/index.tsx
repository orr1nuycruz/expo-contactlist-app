import {reducer} from './../reducers/index'
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'

export function configureAppStore(){
    const store = configureStore({
        reducer,
        middleware: [...getDefaultMiddleware({serializableCheck: false})],
        devTools: process.env.NODE_ENV !== "production"
    });
    return store;
}