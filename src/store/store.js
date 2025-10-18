import { configureStore } from '@reduxjs/toolkit';
import servicesStore from './servicesStore';
import exampleStore from './exampleStore';
import blogStore from './blogStore';
import clientsStore from './clientsStore';
import subscribersStore from './subscribersStore';

const store = configureStore({
    reducer: {
        services: servicesStore,
        examples: exampleStore,
        blogs: blogStore,
        clients: clientsStore,
        subscribers: subscribersStore,
    }
});

export default store;