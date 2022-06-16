import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todoSlice';
// import { persistStore , persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const persistConfig = {
//   key : "todos",
//   storage
// }

export const store = configureStore({
  reducer: {
    todos : todoReducer
  },
});

// const persistedReducer = persistReducer(persistConfig , todoReducer);
// export const Persistor = persistStore(store);
