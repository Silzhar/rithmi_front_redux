import { createSlice } from '@reduxjs/toolkit'

export const rithmiSlice = createSlice({
  name: 'rithmi',

  initialState: {
    samples: [],
  },
  reducers: {
    pushSamples: (state, action) => {
      state.samples = action.payload
    },
  },
})

// Action.
export const { pushSamples } = rithmiSlice.actions

// Selector.

export const selectSamples = (state) => state.rithmi.samples

export default rithmiSlice.reducer
