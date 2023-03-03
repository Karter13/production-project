import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, {rejectValue: string}>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post<User>('http://localhost:8000/login', authData);

            if (!response.data) {
                throw new Error();
            }

            const userdata = response.data;

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(userdata));
            thunkAPI.dispatch(userActions.setAuthData(userdata));

            return userdata;
        } catch (e) {
            return thunkAPI.rejectWithValue('ERROR');
        }
    },
);
