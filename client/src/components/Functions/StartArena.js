import API from "../../utils/API";

export const StartArena = async (item) => {
    
    try {
        
        await API.startArena(item).then(res => console.log(res));

    } catch (err) {
        console.log(err)
    }
}