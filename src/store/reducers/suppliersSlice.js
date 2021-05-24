import { createSlice } from '@reduxjs/toolkit'

const suppliersSlice = createSlice({
    name: 'suppliers',
    initialState: {
        loading: false,
        suppliers: [
            {
              key: 1,
              company: 'Bubble comics',
              expiresAt: '05.07.2021',
              address: 'ул.Краснова 14 г.Калининград',
            },
            {
              key: 2,
              company: 'Рамона',
              expiresAt: '12.10.2022',
              address: 'ул.Волкова 4 г.Москва',
            }
        ],
    },
    reducers: {
        addSupplier(state, action) {},
        deleteSupplier(state, action) {},
    },
  })

  // Extract the action creators object and the reducer
  const { actions } = suppliersSlice
  // Extract and export each action creator by name
  export const { addSupplier, deleteSupplier } = actions
  // Export the reducer, either as a default or named export
  export default suppliersSlice.reducer