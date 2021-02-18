    import API from "../../utils/API";

export const SavePatheon = async (data) => {
    try {
        API.savePantheon(data).then(res => console.log(res));

    } catch (err) {
        console.log("err", err)
    }
}