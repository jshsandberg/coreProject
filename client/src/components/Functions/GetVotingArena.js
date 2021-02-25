import API from "../../utils/API";

export const GetVotingArena = async (user) => {

    try {

        const response = {};

        await API.getVotingArena(user.username).then(res => response["res"] = res.data)

        return response.res

    } catch (err) {
        console.log(err)
    }
};