import { configureStore } from '@reduxjs/toolkit'
import  storeslice  from './storeslice/storeslice';


export const store = configureStore({
  reducer:{
    stor: storeslice,
  }
});