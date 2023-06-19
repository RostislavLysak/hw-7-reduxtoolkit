import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "./battle.request";

const initialState = {
    loading: true,
    winner: '',
    loser: '',
    error: null,
    players: [{ name: '', image: null }, { name: '', image: null }]
}

const battleSlice = createSlice({
    name: 'battle',
    initialState,
    reducers: {
        getPlayerAction: (state, action) => {
            const { index, ...payload } = action.payload
            const player = state.players[index]

            if (!player) {
                state.players[index] = {}
            }

            state.players[index] = { ...player, ...payload }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getUsers.pending, state => {

        })
        builder.addCase(getUsers.fulfilled, (state, { payload }) => {
            const [winner, loser] = payload
            state.winner = winner
            state.loser = loser
            state.loading = false
        })
        builder.addCase(getUsers.rejected, (state, { payload }) => {
            state.error = payload
            state.loading = false
        })
    }

})


export const { getPlayerAction } = battleSlice.actions

export default battleSlice.reducer