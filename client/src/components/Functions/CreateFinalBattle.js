import API from "../../utils/API";

export const CreateFinalBattle = async (id) => {
    try {
   

        await API.createFinalBattle(id).then(res => console.log(res))

    } catch (err) {
        console.log(err)
    }
};