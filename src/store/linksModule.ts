import { createSlice } from '@reduxjs/toolkit'

import { getLinksFromDB } from '../utils/Api'

export interface ILink {
  link_path: string
  link_description: string
  createdAt?: Date
  id: string
}

interface InitialStateProps {
  linkList: ILink[] | [] | undefined
  currentError: ILink | {}
  allLinksLength: number
  pending: boolean
}

const initialState: InitialStateProps = {
  linkList: [],
  currentError: {},
  allLinksLength: 0,
  pending: false,
}

const links = createSlice({
  name: 'links',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getLinksFromDB.pending, (state) => {
      state.pending = true
    })
    builder.addCase(getLinksFromDB.fulfilled, (state, { payload }) => {
      const { links, allLinksLength } = payload
      state.allLinksLength = allLinksLength
      state.linkList = links
      state.pending = false
    })
  },
})

export default links.reducer
