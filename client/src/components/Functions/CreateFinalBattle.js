import API from "../../utils/API";

export const CreateFinalBattle = async (id, battleOne, battleTwo) => {
    try {
        const battle = {
            battleOne: battleOne,
            battleTwo: battleTwo
        }

        await API.createFinalBattle(id, battle).then(res => console.log(res))

    } catch (err) {
        console.log(err)
    }
};