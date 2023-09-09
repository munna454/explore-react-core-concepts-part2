import { useState } from "react"

export default function Team (){

    const [team, setTeam] = useState(11)

    const handlePlayerAdd = () => {
        const newPlayer = team + 1
        setTeam(newPlayer)
    }

    const handleRemove = () => {
        setTeam(team - 1)
    }

    const teamStyle = {
        border: '2px solid purple',
        margin: '20px',
        padding: '10px',
        borderRadius: '15px'
    }

    return (
        <div style={teamStyle}>
            <h3>Players: {team} </h3>
            <button onClick={handlePlayerAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}