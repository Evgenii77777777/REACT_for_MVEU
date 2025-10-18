import { createAsyncThunk } from '@reduxjs/toolkit';

const getSubscribersAsync = createAsyncThunk(
    'subscribers/getSubscribersAsync',
    async () => {
        const response = await fetch(`/api/subscribers`);
        if (!response.ok) throw new Error(response.statusText);
        const subscribers = await response.json();
        return subscribers;
    },
);

const subscribe = async (subscriber) => {
    await fetch('/api/subscribers', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(subscriber),
    });
}

export default subscribe;
export { getSubscribersAsync }