import { createSlice } from '@reduxjs/toolkit'

import { getErrorsFromDB, getCurrentErrorFromDB } from '../utils/Api'

export interface IError {
  error_heading: string
  error_description: string
  error_solution: string
  error_code?: string
  createdAt?: Date
  id: string
}

interface InitialStateProps {
  errorList: IError[] | [] | undefined
  currentError: IError | {}
  allErrorsLength: number
  pending: boolean
}

const initialState: InitialStateProps = {
  errorList: [],
  currentError: {},
  allErrorsLength: 0,
  pending: false,
}

const errors = createSlice({
  name: 'errors',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getErrorsFromDB.pending, (state) => {
      state.pending = true
    })
    builder.addCase(getErrorsFromDB.fulfilled, (state, { payload }) => {
      const { errors, allErrorsLength } = payload
      state.allErrorsLength = allErrorsLength
      state.errorList = errors
      state.pending = false
    })

    builder.addCase(getCurrentErrorFromDB.pending, (state) => {
      state.pending = true
    })
    builder.addCase(getCurrentErrorFromDB.fulfilled, (state, { payload }) => {
      state.currentError = payload
      state.pending = false
    })
  },
})

export default errors.reducer
