import API from "../../utils/API";

export const SaveFinalVotes = async (fighter, pantheonId, username) => {
    try {

        const obj = {
            fighter: fighter,
            pantheonId: pantheonId,
        };

        await API.saveFinalVotes(obj, username).then(res => console.log(res))


    } catch (err) {
        console.log(err)
    }
}