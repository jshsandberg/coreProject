import API from "../../utils/API";

export const SaveVotes = async (fighter, state, username) => {

    try {

        const obj = {
            state: state,
            fighter: fighter,
            username: username
        }    
        await API.saveVotes(obj).then(res => console.log(res))

    } catch (err) {
        console.log(err)
    }
}