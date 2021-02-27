import API from "../../utils/API";

export const SubmitBattle = async (item, user, pantheonId, arenaId, battleId) => {
    

    try {

        const obj = {
            pantheonId: pantheonId,
            arenaId: arenaId,
            battleId: battleId,
            item: item
        }

        await API.submitBattle(obj, user.username).then(res => console.log(res))

    } catch (err) {
        console.log(err)
    }
}