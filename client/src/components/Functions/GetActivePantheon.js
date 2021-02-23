import API from "../../utils/API";

export const GetActivePantheon = async (username) => {
    try {

        const response = {}

        await API.getActivePantheon(username).then(res => response["res"] = res.data);

        return response.res;
        
    } catch (err) {
        console.log(err)
    }
};