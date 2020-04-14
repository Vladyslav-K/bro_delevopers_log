import { createAsyncThunk } from '@reduxjs/toolkit'

import { IProblem } from '../store/problemsModule'

import db from './firestore'

export const addProblem = createAsyncThunk('problems/addProblem', (arg: IProblem) => {
  db.collection('problems')
    .add(arg)
    .then(() => {
      console.log('ok')
    })
})

export const getProblemsFromDB = createAsyncThunk('problems/getProblemsFromDB', () => {
  const problems: Promise<IProblem[]> = db
    .collection('problems')
    .orderBy('createdAt', 'desc')
    .get()
    .then((querySnapshot) => {
      const result: any = []

      querySnapshot.forEach((problem) => {
        const id = problem.id
        const data = problem.data()
        const problemData = { id, ...data }

        result.push(problemData)
      })

      return result
    })
  return problems
})

export const getCurrentProblemFromDB = createAsyncThunk(
  'problems/getCurrentProblemFromDB',
  async (problemId: string) => {
    const problem = db
      .collection('problems')
      .doc(problemId)
      .get()
      .then((problem) => {
        const id = problem.id
        const data = problem.data()
        const problemData = { id, ...data }

        return problemData
      })
    return problem
  },
)
