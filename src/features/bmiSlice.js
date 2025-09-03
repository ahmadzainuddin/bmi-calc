import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  inputs: { weight: 60, height: 170 }, // kg, cm
  results: { bmi: 0, category: '' }
}

function categorize(bmi) {
  if (bmi < 18.5) return 'Underweight'
  if (bmi < 25) return 'Normal'
  if (bmi < 30) return 'Overweight'
  return 'Obese'
}

const bmiSlice = createSlice({
  name: 'bmi',
  initialState,
  reducers: {
    setField: (state, { payload }) => {
      const { key, value } = payload
      state.inputs[key] = value
    },
    resetAll: (state) => {
      state.inputs = { ...initialState.inputs }
      state.results = { ...initialState.results }
    },
    compute: (state) => {
      const hM = (Number(state.inputs.height) || 0) / 100
      const w = Number(state.inputs.weight) || 0
      if (hM > 0 && w > 0) {
        const bmi = w / (hM * hM)
        state.results = { bmi, category: categorize(bmi) }
      } else {
        state.results = { bmi: 0, category: 'Invalid input' }
      }
    }
  }
})

export const { setField, resetAll, compute } = bmiSlice.actions
export default bmiSlice.reducer