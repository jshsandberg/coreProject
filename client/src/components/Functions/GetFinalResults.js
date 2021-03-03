import API from "../../utils/API";

export const GetFinalResults = async (user) => {

    try {

        const response = {};

        await API.getFinalResults(user.username).then(res => {
            response["res"] = res.data
        })

        return response.res

    } catch (err) {
        console.log(err)
    }
}