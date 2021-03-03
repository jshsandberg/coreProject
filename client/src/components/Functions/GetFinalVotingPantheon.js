import API from "../../utils/API";

export const GetFinalVotingPantheon = async (user) => {
    try {

        const response = {};

        await API.getFinalVotingPantheon(user.username).then(res => {
            response["res"] = res.data
        })

        return response.res

    } catch (err) {
        console.log(err)
    }
}