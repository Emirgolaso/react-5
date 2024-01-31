import {createAsyncThunk} from '@reduxjs/toolkit'   ;

const fetchAllUsers = createAsyncThunk('users/fetchAll',async(payload,thunkApi)=>{
    try{
        const response = await fetch('http://localhost:5000/users');
        const data = await response.json();
        return data;

    }catch (err){
        return thunkApi.rejectWithValue('something has gone wrong ');
    }
});

export default fetchAllUsers;