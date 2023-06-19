import { createAsyncThunk } from "@reduxjs/toolkit"
import { fetchPopularRepos } from "../../plugins/api"
import { cache } from "../../utils"
import { setSelectedLanguageAction } from "./popular.slice"


const fetchPopularReposMemoized = cache(fetchPopularRepos)

// export const getRepos = (selectedLanguage) => (dispatch) => {
//     dispatch(setSelectedLanguageAction(selectedLanguage))
//     dispatch(setReposLoadingAction())

//     fetchPopularReposMemoized(selectedLanguage)
//         .then(response => dispatch(getReposSuccessAction(response)))
//         .catch(error => dispatch(getReposFailureAction(error)))
// }

export const getRepos = createAsyncThunk(
    'popular/getRepos',
    async (selectedLanguage, { rejectWithValue, dispatch }) => {

        dispatch(setSelectedLanguageAction(selectedLanguage))

        try {
            return await fetchPopularReposMemoized(selectedLanguage)
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)