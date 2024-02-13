import { fetchAllPlayers } from "../api";
import { useState, useEffect } from 'react'

const AllPlayers = () => {
    const [players, setPlayers] = useState([])

    useEffect(()=>{

        async function getPlayers () {
        const data = await fetchAllPlayers()
        setPlayers(data)
        } 
        getPlayers()


    }, [])

    return (
        <div>
            <h1>All Players</h1>

            {players.map((player) => {
                return <h3 key={player.id}>
                    {player.name}
                </h3>

            })}
        </div>
    );
}


export default AllPlayers