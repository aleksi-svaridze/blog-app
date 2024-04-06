import {configureStore} from '@reduxjs/toolkit'
import {countReducer} from './reducer/countReducer'

const store = configureStore({
    reducer: {
        count: countReducer
    }
})

export default store;