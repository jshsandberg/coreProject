import API from "../../utils/API";

export const GetVotingPantheon = async (user) => {

    try {

        const response = {};

        await API.getVotingPantheon(user.username).then(res => response["res"] = res.data)

        return response.res

    } catch (err) {
        console.log(err)
    }
};