import { configureStore } from '@reduxjs/toolkit';

import emailSlice from './emails/reducers';

const store = configureStore({
  reducer: {
    email: emailSlice,
  },
});

export default store;
