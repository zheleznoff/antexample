import { createSlice } from '@reduxjs/toolkit'

const booksSlice = createSlice({
    name: 'books',
    initialState: {
        loading: false,
        books: [
            {
              key: 1,
              name: 'Война и мир',
              genre: 'Роман',
              writer: 'Лев Николаевич Толстой'
            },
            {
              key: 2,
              name: 'Гранатовый браслет',
              genre: 'Новелла',
              writer: 'Александр Иванович Куприн'
            }
        ],
    },
    reducers: {
      addBook(state, action) {
        const maxId = state.books.reduce(
          (max, book) => (book.id > max ? book.id : max),
          state.books[0].id
        );
        return {
          ...state,
          books: [
            ...state.books,
            {
              id: maxId,
              ...action.payload
            }
          ]
        }
      },
      deleteBook(state, action) {},
    },
  })

  // Extract the action creators object and the reducer
  const { actions } = booksSlice
  // Extract and export each action creator by name
  export const { addBook, deleteBook } = actions
  // Export the reducer, either as a default or named export
  export default booksSlice.reducer