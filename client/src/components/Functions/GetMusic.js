import API from "../../utils/API";

export const GetMusic = async (user) => {

    try {

        const response = {}

        await API.getMusic(user.username).then(res => response["res"] = res.data)

        return response.res


    } catch (err) {
        console.log(err)
    }

    
}