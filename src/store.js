import { configureStore } from '@reduxjs/toolkit'
import bmiReducer from './features/bmiSlice.js'

export default configureStore({
  reducer: { bmi: bmiReducer }
})