import { createSlice } from '@reduxjs/toolkit'

import { getProblemsFromDB, getCurrentProblemFromDB } from '../utils/Api'

export interface IProblem {
  problem_heading: string
  problem_description: string
  problem_solution: string
  problem_code?: string
  createdAt?: Date
  id: string
}

interface InitialStateProps {
  problemList: IProblem[] | []
  currentProblem: IProblem | {}
  pending: boolean
  error: boolean
}

const initialState: InitialStateProps = {
  problemList: [],
  currentProblem: {},
  pending: false,
  error: false,
}

const problems = createSlice({
  name: 'problems',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProblemsFromDB.pending, (state) => {
      state.pending = true
      state.error = false
    })
    builder.addCase(getProblemsFromDB.rejected, (state) => {
      state.pending = false
      state.error = true
    })
    builder.addCase(getProblemsFromDB.fulfilled, (state, { payload }) => {
      if (payload !== null) {
        state.problemList = payload
        state.pending = false
        state.error = false
      }
    })
    builder.addCase(getCurrentProblemFromDB.pending, (state) => {
      state.pending = true
      state.error = false
    })
    builder.addCase(getCurrentProblemFromDB.rejected, (state) => {
      state.pending = false
      state.error = true
    })
    builder.addCase(getCurrentProblemFromDB.fulfilled, (state, { payload }) => {
      if (payload !== null) {
        state.currentProblem = payload
        state.pending = false
        state.error = false
      }
    })
  },
})

export default problems.reducer
