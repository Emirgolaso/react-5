import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counter';
import usersReduser from './slices/userSlice';

const rootReducer = {
    counter: counterReducer,
    users: usersReduser,
};

const setupStore = () => configureStore({ reducer: rootReducer })

export default setupStore;
