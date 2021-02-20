import API from "../../utils/API"

export const GetPantheon = async (username) => {

    try {

        const response = {};

        const foundPantheon = await API.getPantheon(username).then(res => response["res"] = res.data);

        return (response.res)

    } catch (err) {
        console.log(err)
    }
}