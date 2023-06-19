import { configureStore } from '@reduxjs/toolkit'
import { createLogger } from 'redux-logger'
import popular from './popular/popular.slice'
import battle from './battle/battle.slice'


const store = configureStore({
    reducer: {
        popular,
        battle
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(createLogger({ collapsed: true }))
});

export default store