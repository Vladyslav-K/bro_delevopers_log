import { createAsyncThunk } from '@reduxjs/toolkit'

import { IProblem } from '../store/problemsModule'
import { IError } from '../store/errorsModule'
import { ILink } from '../store/linksModule'

import db from './firestore'

import { ITEMS_COUNT_PER_PAGE } from './constants'

export const addProblem = createAsyncThunk('problems/addProblem', (arg: IProblem) => {
  db.collection('problems').add(arg)
})

export const getProblemsFromDB = createAsyncThunk('problems/getProblemsFromDB', async (page: number) => {
  const ref = db.collection('problems').orderBy('createdAt', 'desc')
  const allProblemsLength = await ref.get().then((querySnapshot) => {
    return querySnapshot.docs.length
  })

  const problems: IProblem[] = await ref
    .limit(page * ITEMS_COUNT_PER_PAGE)
    .get()
    .then((querySnapshot) => {
      let lastVisible = querySnapshot.docs[page * ITEMS_COUNT_PER_PAGE - ITEMS_COUNT_PER_PAGE]

      const data = db
        .collection('problems')
        .orderBy('createdAt', 'desc')
        .startAt(lastVisible)
        .limit(ITEMS_COUNT_PER_PAGE)
        .get()
        .then((querySnapshot) => {
          let result: any = []

          querySnapshot.forEach((problem) => {
            const id = problem.id
            const data = problem.data()
            const problemData = { id, ...data }

            result.push(problemData)
          })

          return result
        })

      return data
    })

  return { problems, allProblemsLength }
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

export const addError = createAsyncThunk('errors/addProblem', (arg: IError) => {
  db.collection('errors').add(arg)
})

export const getErrorsFromDB = createAsyncThunk('errors/getErrorsFromDB', () => {
  const errors: Promise<IError[]> = db
    .collection('errors')
    .orderBy('createdAt', 'desc')
    .get()
    .then((querySnapshot) => {
      const result: any = []

      querySnapshot.forEach((error) => {
        const id = error.id
        const data = error.data()
        const errorData = { id, ...data }

        result.push(errorData)
      })

      return result
    })

  return errors
})

export const getCurrentErrorFromDB = createAsyncThunk('errors/getCurrentProblemFromDB', async (errorId: string) => {
  const error = db
    .collection('errors')
    .doc(errorId)
    .get()
    .then((error) => {
      const id = error.id
      const data = error.data()
      const errorData = { id, ...data }

      return errorData
    })
  return error
})

export const addLink = createAsyncThunk('links/addLink', (arg: ILink) => {
  db.collection('links').add(arg)
})

export const getLinksFromDB = createAsyncThunk('links/getLinksFromDB', () => {
  const links: Promise<ILink[]> = db
    .collection('links')
    .orderBy('createdAt', 'desc')
    .get()
    .then((querySnapshot) => {
      const result: any = []

      querySnapshot.forEach((link) => {
        const id = link.id
        const data = link.data()
        const linkData = { id, ...data }

        result.push(linkData)
      })

      return result
    })

  return links
})

export const getCurrentLinkFromDB = createAsyncThunk('links/getCurrentLinkFromDB', async (linkId: string) => {
  const link = db
    .collection('links')
    .doc(linkId)
    .get()
    .then((link) => {
      const id = link.id
      const data = link.data()
      const linkData = { id, ...data }

      return linkData
    })
  return link
})
