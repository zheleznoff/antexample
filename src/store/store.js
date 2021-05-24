import { configureStore } from '@reduxjs/toolkit';
import clientsReducer from './reducers/clientsSlice';
import booksReducer from './reducers/booksSlice';
import suppliersReducer from './reducers/suppliersSlice'

const store = configureStore({
  reducer: {
    clients: clientsReducer,
    books: booksReducer,
    suppliers: suppliersReducer
  },
})

export {
  store
}