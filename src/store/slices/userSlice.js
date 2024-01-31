import { createSlice } from '@reduxjs/toolkit'
import fetchAllUsers from '../thunks/usersThuk';

const initialState = {

    users: [],
    isUsersLaodung: false,
    userError: '',
};

const userSlice = createSlice({
    initialState,
    name: 'UserSlice',
    reducers: {
        setUsers: (state, action) => {
            state.isUsersLaodung = false;
            state.users = action.payload;
        },
        setUsersError: (state, action) => {
            state.userError = action.payload;
            state.isUsersLaodung = false;
        },
        setUsersLaoding: (state) => {
            state.isUsersLaodung = true;
            state.users = [];
            state.userError = '';
        },

    },

    extraReducers: (builder) => {
        builder.addCase(fetchAllUsers.pending, (state, action) => {
            state.isUsersLaodung = true;
            state.users = [];
            state.userError = '';
        });

        builder.addCase(fetchAllUsers.rejected, (state, action) => {
            state.userError = action.payload;
            state.isUsersLaodung = false;
        });


        builder.addCase(fetchAllUsers.fulfilled, (state, action) => {
            state.isUsersLaodung = false;
            state.users = action.payload;
        });




    }
});



const usersReduser = userSlice.reducer;
export default usersReduser;
export const { setUsers, setUsersError, setUsersLaoding } = userSlice.actions;