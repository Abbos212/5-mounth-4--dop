import { combineReducers, configureStore } from '@reduxjs/toolkit'

import postsReducers from '../slices/postsSlice'
import historyReducers from '../slices/historySlices'

const rootReducers = combineReducers({ posts: postsReducers, history: historyReducers })

export const store = configureStore({ reducer: rootReducers })