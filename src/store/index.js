import { configureStore } from '@reduxjs/toolkit'
import gearReducer  from '@/lib/redux/slice'


export const makeStore = () => {
  return configureStore({
    reducer: {
      gear: (state, action) => gearReducer(state, action, 'barbarian'), 
    }
  })
}
