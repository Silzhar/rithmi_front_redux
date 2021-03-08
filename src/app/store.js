import { configureStore } from '@reduxjs/toolkit'
import rithmiSliceReducer from '../features/rithmiSlice'

export default configureStore({
  reducer: {
    rithmi: rithmiSliceReducer
  },
});
