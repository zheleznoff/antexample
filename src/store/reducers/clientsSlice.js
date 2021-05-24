import { createSlice } from '@reduxjs/toolkit'

const clientsSlice = createSlice({
    name: 'clients',
    initialState: {
        loading: false,
        clients: [
            {
              key: 1,
              name: 'Виктор Деменев',
              age: 24,
              address: 'Проспект Мира 15',
            },
            {
              key: 2,
              name: 'Дмитрий Крылов',
              age: 17,
              address: 'Карпинского 12',
            }
        ],
    },
    reducers: {
      addClient(state, action) {},
      deleteClient(state, action) {},
    },
  })
  
  // Extract the action creators object and the reducer
  const { actions } = clientsSlice
  // Extract and export each action creator by name
  export const { createPost, updatePost, deletePost } = actions
  // Export the reducer, either as a default or named export
  export default clientsSlice.reducer