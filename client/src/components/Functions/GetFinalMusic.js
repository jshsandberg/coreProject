import API from "../../utils/API";

export const GetFinalMusic = async (user) => {
    try {

        const data = {};

        await API.getFinalMusic(user.username).then(res => data["res"] = res.data);

        return data.res

    } catch (err) {
        console.log(err)
    }
}