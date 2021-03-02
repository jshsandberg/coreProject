import API from "../../utils/API";

export const GetResults = async (user) => {
    try {

        const response = {};

        await API.getResults(user.username).then(res => {
            response["res"] = res.data
        });

        return response.res

    } catch (err) {
        console.log(err)
    }
}