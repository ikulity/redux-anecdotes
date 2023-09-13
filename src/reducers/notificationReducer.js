import { createSlice } from '@reduxjs/toolkit'

const initialState = 'My notify message!'

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotifyMsg(state, action) {
      return action.payload
    }
  }
})

export const { setNotifyMsg } = notificationSlice.actions
export default notificationSlice.reducer