import API from "../../utils/API";

export const AddFriend = async (username, friendUsername) => {
    try {
        API.addFriend(username, friendUsername).then(res => console.log(res));
    } catch (err) {
        console.log(err)
    }
}