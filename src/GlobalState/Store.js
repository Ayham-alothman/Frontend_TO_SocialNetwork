import {configureStore} from '@reduxjs/toolkit';
import userSlice from './Slices/UserSlice.js';

const Store=configureStore({
    reducer:{
        User:userSlice.reducer,
    }
});

export default Store;
