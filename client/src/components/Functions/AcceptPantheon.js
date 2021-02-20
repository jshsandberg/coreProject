import API from "../../utils/API";

export const AcceptPantheon = async (item, username) => {

    try {

        await API.acceptPantheon(item._id, username).then(res => console.log(res))


    } catch (err) {
        console.log(err)
    }

}