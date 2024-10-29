import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    user: null,
    token: localStorage.getItem("token") || null,  
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: ""
};

export const LoginUser = createAsyncThunk(
    'auth/login',
    async (userData, thunkAPI) => {
        try {
            const res = await axios.post('http://localhost:8000/api/users/login', userData);
            const { token } = res.data;

            localStorage.setItem("token", token);

            return {  token };  
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data?.message || "Login failed.");
        }
    }
);

export const RegisterUser = createAsyncThunk(
    "auth/register",
    async (userData, thunkAPI) => {
        try {
            const response = await axios.post("http://localhost:8000/api/users/register", userData);
            return response.data; 
        } catch (error) {
            if (error.response && error.response.status === 400) {
                return thunkAPI.rejectWithValue("User found, please login.");
            }
            return thunkAPI.rejectWithValue(error.response?.data?.message || "Registration failed.");
        }
    }
);

export const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = false;
            state.message = "";
        },
        logout: (state) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = false;
            state.message = "";
            state.user = null;
            state.token = null;
            localStorage.removeItem("token");  
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(RegisterUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(RegisterUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
                state.message = "Registration successful!";
            })
            .addCase(RegisterUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload || "Registration failed.";
            })
            .addCase(LoginUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(LoginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.token = action.payload.token;
                state.message = "Login successful!";
            })
            .addCase(LoginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload || "Login failed.";
            });
    }
});

export const { reset, logout } = AuthSlice.actions;
export default AuthSlice.reducer;
