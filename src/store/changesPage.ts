import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import fonts from '../components/header/data/fonts'
import languages from '../components/header/data/languages'

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
const themeUser =
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
const langStorage = localStorage.getItem('lang')
const langUser = navigator.language.includes('ru') ? languages[1] : languages[0]

const initialState: changesState = {
  theme: themeStorage || themeUser,
  font: fontStorage
    ? JSON.parse(fontStorage)
    : {
        ...fonts[0],
      },
  language: langStorage
    ? JSON.parse(langStorage)
    : {
        ...langUser,
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
      localStorage.setItem('lang', JSON.stringify(action.payload))
      state.language = action.payload
    },
  },
})

export const { changeFont, changeTheme, changeLanguage } = changesPage.actions

export default changesPage.reducer
