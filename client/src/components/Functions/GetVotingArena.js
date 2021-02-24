import API from "../../utils/API";

export const GetVotingArena = async (user) => {

    try {

        await API.getVotingArena(user.username).then(res => console.log(res))

    } catch (err) {
        console.log(err)
    }
};