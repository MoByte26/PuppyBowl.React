const BASE_URL = "https://fsa-puppy-bowl.herokuapp.com/api/2308-ACC-ET-WEB-PT-A/players"

 export const fetchAllPlayers = async () => {
    try { 
       const response = await fetch(`${BASE_URL}`)
        const result = await response.json()
        return result.data.players
    } catch (err) {
        console.log(err)
    }
 }