import API from "../../utils/API";

export const StartMusic = async (item) => {
    
    try {
        
        await API.startMusic(item).then(res => console.log(res));

    } catch (err) {
        console.log(err)
    }
}