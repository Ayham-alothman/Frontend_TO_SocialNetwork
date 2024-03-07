import {createSlice} from '@reduxjs/toolkit';

const userSlice=createSlice({
    name:'user',
    initialState:{
        id:'',
        name:'',
        email:'',
        friends:[],
        sendrequest:[],
        receiverequest:[]
    },
    reducers:{
        setUser:(state,action)=>{return state={
            id:action.payload.id,
            name:action.payload.name,
            friends:action.payload.friends,
            sendrequest:action.payload.sendrequest,
            receiverequest:action.payload.receiverequest,
        }}

    }
})

export const actionSliceuser=userSlice.actions;
export default userSlice;