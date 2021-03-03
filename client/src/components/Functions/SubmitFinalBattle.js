import API from "../../utils/API";

export const SubmitFinalBattle = async (item, user, pantheonId) => {
    

    try {

        const obj = {
            pantheonId: pantheonId,
            item: item
        }

        await API.submitFinalBattle(obj, user.username).then(res => console.log(res))

    } catch (err) {
        console.log(err)
    }
}