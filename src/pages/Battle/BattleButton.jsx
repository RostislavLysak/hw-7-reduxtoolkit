import { memo } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const BattleButton = memo(() => {
    const players = useSelector(state => state.battle.players)

    if (players.every(player => player.image)) {
        return (
            <Link className="button" to={{
                pathname: 'results',
                search: `?playerOneName=${players[0].name}&playerTwoName=${players[1].name}`
            }}>
                Battle
            </Link>
        )
    }

    return
})

export default BattleButton