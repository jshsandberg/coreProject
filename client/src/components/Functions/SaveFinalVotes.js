import API from "../../utils/API";

export const SaveFinalVotes = async (fighter, pantheonId, username) => {
    try {

        const response = {};

        const obj = {
            fighter: fighter,
            pantheonId: pantheonId,
        };

        await API.saveFinalVotes(obj, username).then(res => response["res"] = res.data);

        return response.res

    } catch (err) {
        console.log(err)
    }
}