import { createSlice } from '@reduxjs/toolkit';
import { getClientsAsync } from '../api/clients';

const clientsStore = createSlice({
    name: 'clientsStore',
    initialState: {
        clients: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getClientsAsync.fulfilled, (state, action) => {
            state.clients = action.payload;
        });
    },
});

export default clientsStore.reducer;
