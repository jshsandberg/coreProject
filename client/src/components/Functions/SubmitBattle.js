import API from "../../utils/API";

export const SubmitBattle = async (item, user, pantheonId) => {
    

    try {

        const response = {};


        if (item === undefined) {
            response["res"] = "Must choose a song";
            return response.res
        } else {
            
            const obj = {
                pantheonId: pantheonId,
                item: item
            }
    
            await API.submitBattle(obj, user.username).then(res => response["res"] = res.data);
    
            return response.res
        }  

    } catch (err) {
        console.log(err)
    }
}