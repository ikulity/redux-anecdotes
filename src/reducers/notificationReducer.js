import { createSlice } from '@reduxjs/toolkit'

const initialState = ''

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotifyMsg(state, action) {
      return action.payload
    },
    resetNotifyMsg() {
      return ''
    }
  }
})

export const { setNotifyMsg, resetNotifyMsg } = notificationSlice.actions
export default notificationSlice.reducer