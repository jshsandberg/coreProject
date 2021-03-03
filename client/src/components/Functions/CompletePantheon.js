import API from "../../utils/API";

export const CompletePantheon = async (pantheonId) => {

    try {

        await API.completePantheon(pantheonId).then(res => console.log(res))

    } catch (err) {
        console.log(err)
    }


}


