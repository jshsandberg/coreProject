import API from "../../utils/API";

export const CompletePantheon = async (pantheonId) => {

    try {

        const response = {}

        await API.completePantheon(pantheonId).then(res => response["res"] = res.data)

        return response.res

    } catch (err) {
        console.log(err)
    }


}


