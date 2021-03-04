import API from "../../utils/API";

export const SubmitFinalBattle = async (item, user, pantheonId) => {
    

    try {

        const response = {};

        if (item !== undefined) {
            const obj = {
                pantheonId: pantheonId,
                item: item
            }
    
            await API.submitFinalBattle(obj, user.username).then(res => {
                response["res"] = res.data;
            });

            return response.res

        } else {
            response["res"] = "You much choose a song";
            return response.res
        }

    } catch (err) {
        console.log(err)
    }
}