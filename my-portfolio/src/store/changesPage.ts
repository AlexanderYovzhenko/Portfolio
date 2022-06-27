import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface changesState {
  font: string
}

const initialState: changesState = {
  font: localStorage.getItem('font') || '1',
}

export const changesPage = createSlice({
  name: 'changesPage',
  initialState,
  reducers: {
    changeFont(state, action: PayloadAction<string>) {
      localStorage.setItem('font', action.payload)
      state.font = action.payload
    },
  },
})

export const { changeFont } = changesPage.actions

export default changesPage.reducer
