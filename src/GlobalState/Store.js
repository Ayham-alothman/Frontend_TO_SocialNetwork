import {configureStore} from '@reduxjs/toolkit';
import userSlice from './Slices/UserSlice.js';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';


const persistConfig = {
    key: 'root',
    storage,
  }

  const persistedReducer = persistReducer(persistConfig, userSlice.reducer)

const Store=configureStore({
    reducer:{
        User:persistedReducer,
    },
    
});
export const persistor = persistStore(Store)

export default Store;
