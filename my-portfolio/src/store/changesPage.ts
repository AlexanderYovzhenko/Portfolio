import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface changesState {
  font: {
    value: string
    label: string
  }
  theme: string
  language: {
    value: string
    label: string
  }
}

const fontStorage = localStorage.getItem('font')
const themeStorage = localStorage.getItem('theme')
// const languageStorage = localStorage.getItem('language')

const initialState: changesState = {
  theme: themeStorage || 'light',
  font: fontStorage
    ? JSON.parse(fontStorage)
    : {
        value: "'Rubik Moonrocks', cursive",
        label: 'Rubik',
      },
  language: {
    value: 'en',
    label: 'en',
  },
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
    changeLanguage(
      state,
      action: PayloadAction<{
        value: string
        label: string
      }>
    ) {
      localStorage.setItem('language', JSON.stringify(action.payload))
      state.language = action.payload
    },
  },
})

export const { changeFont, changeTheme, changeLanguage } = changesPage.actions

export default changesPage.reducer
