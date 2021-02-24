import API from "../../utils/API";

export const GetArena = async (user) => {

    try {

        const response = {}

        await API.getArena(user.username).then(res => response["res"] = res.data)

        return response.res


    } catch (err) {
        console.log(err)
    }

    
}