import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    rooms: [],
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: "",
    room: null
};

export const getAllRooms = createAsyncThunk('room/getAll', async (_, { rejectWithValue }) => {
    try {
        const res = await axios.get('http://localhost:8000/api/rooms/all');
        return res?.data?.rooms;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

export const getOneRoom = createAsyncThunk('room/getOne', async (id, { rejectWithValue }) => {
    try {
        const res = await axios.get(`http://localhost:8000/api/rooms/one/${id}`);
        return res?.data?.room;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

export const roomSlice = createSlice({
    name: "room",
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = false;
            state.message = "";
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllRooms.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllRooms.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.rooms = action.payload;
            })
            .addCase(getAllRooms.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(getOneRoom.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getOneRoom.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.room = action.payload;
            })
            .addCase(getOneRoom.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            });
    }
});

export const { reset } = roomSlice.actions;

export default roomSlice.reducer;
