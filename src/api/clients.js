import { createAsyncThunk } from '@reduxjs/toolkit';

const getClientsAsync = createAsyncThunk(
    'client/getClientsAsync',
    async () => {
        const response = await fetch(`/api/clients`);
        if (!response.ok) throw new Error(response.statusText);
        const clients = await response.json();
        return clients;
    },
);

const sendClient = async (client) => {
    await fetch('/api/clients', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(client),
    });
}

export default sendClient;
export { getClientsAsync }