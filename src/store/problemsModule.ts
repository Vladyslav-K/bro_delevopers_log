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
  problemList: IProblem[] | [] | undefined
  currentProblem: IProblem | {}
  allProblemsLength: number
  pending: boolean
}

const initialState: InitialStateProps = {
  problemList: [],
  currentProblem: {},
  allProblemsLength: 0,
  pending: false,
}

const problems = createSlice({
  name: 'problems',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProblemsFromDB.pending, (state) => {
      state.pending = true
    })
    builder.addCase(getProblemsFromDB.fulfilled, (state, { payload }) => {
      const { problems, allProblemsLength } = payload
      state.allProblemsLength = allProblemsLength
      state.problemList = problems
      state.pending = false
    })

    builder.addCase(getCurrentProblemFromDB.fulfilled, (state, { payload }) => {
      state.currentProblem = payload
    })
  },
})

export default problems.reducer
