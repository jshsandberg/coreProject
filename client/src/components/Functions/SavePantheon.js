    import API from "../../utils/API";

export const SavePatheon = async (data) => {
    try {

        const obj = {};

        await API.savePantheon(data).then(res => obj["res"] = res.data);

        return obj.res

    } catch (err) {
        console.log("err", err)
    }
}