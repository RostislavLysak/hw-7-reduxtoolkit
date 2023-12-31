import { createSlice } from "@reduxjs/toolkit";
import { getRepos } from "./popular.request";

const initialState = {
    selectedLanguage: 'All',
    loading: false,
    repos: [],
    error: null
}

const popularSlice = createSlice({
    name: 'popular',
    initialState,
    reducers: {
        setSelectedLanguageAction: (state, action) => {
            state.selectedLanguage = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getRepos.pending, state => {
            state.error = null
            state.loading = true
        })
        builder.addCase(getRepos.fulfilled, (state, { payload }) => {
            state.loading = false
            state.repos = payload
        })
        builder.addCase(getRepos.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })
    }
})

export const {
    setSelectedLanguageAction
} = popularSlice.actions

export default popularSlice.reducer