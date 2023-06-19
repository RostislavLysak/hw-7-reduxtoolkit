import { createAsyncThunk } from "@reduxjs/toolkit"
import { makeBattle } from "../../plugins/api"

export const getUsers = createAsyncThunk(
    'battle/getUsers',
    async (users, { rejectWithValue }) => {

        try {
            return await makeBattle(users)
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)