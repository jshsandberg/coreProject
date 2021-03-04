import API from "../../utils/API";

export const AcceptPantheon = async (item, username) => {

    try {

        const response = {};

        await API.acceptPantheon(item._id, username).then(res => response["res"] = res.data)

        return response.res

    } catch (err) {
        console.log(err)
    }

}