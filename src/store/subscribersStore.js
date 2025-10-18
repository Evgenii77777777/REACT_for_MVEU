import { createSlice } from '@reduxjs/toolkit';
import { getSubscribersAsync } from '../api/subscribers';

const subscribersStore = createSlice({
    name: 'subscribersStore',
    initialState: {
        subscribers: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getSubscribersAsync.fulfilled, (state, action) => {
            state.subscribers = action.payload;
        });
    },
});

export default subscribersStore.reducer;
