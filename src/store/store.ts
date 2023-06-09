import { configureStore } from '@reduxjs/toolkit'
import changesPage from './changesPage'

export const store = configureStore({
  reducer: {
    changesPage,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
