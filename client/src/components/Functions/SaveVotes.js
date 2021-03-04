import API from "../../utils/API";

export const SaveVotes = async (fighter, state, username) => {

    try {

        const response = {};

        const obj = {
            state: state,
            fighter: fighter,
            username: username
        }    
        await API.saveVotes(obj).then(res => response["res"] = res.data);

        return response.res

    } catch (err) {
        console.log(err)
    }
}