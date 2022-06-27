import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface changesState {
  font: {
    value: string
    label: string
  }
  theme: string
}

const fontStorage = localStorage.getItem('font')
const themeStorage = localStorage.getItem('theme')

const initialState: changesState = {
  font: fontStorage
    ? JSON.parse(fontStorage)
    : {
        value: "'Marck Script', cursive",
        label: 'Marck',
      },
  theme: themeStorage || 'light',
}

export const changesPage = createSlice({
  name: 'changesPage',
  initialState,
  reducers: {
    changeFont(
      state,
      action: PayloadAction<{
        value: string
        label: string
      }>
    ) {
      localStorage.setItem('font', JSON.stringify(action.payload))
      state.font = action.payload
    },
    changeTheme(state, action: PayloadAction<string>) {
      localStorage.setItem('theme', action.payload)
      state.theme = action.payload
    },
  },
})

export const { changeFont, changeTheme } = changesPage.actions

export default changesPage.reducer
