import {configureStore} from '@reduxjs/toolkit'
import rootSlice from"./sclics"

export const store = configureStore({
    reducer:{
        roots: rootSlice

    }
})
export type rootType = ReturnType<typeof store.getState>
export type Appdispatch = typeof store.dispatch