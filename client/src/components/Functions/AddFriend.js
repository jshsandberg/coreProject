import API from "../../utils/API";

export const AddFriend = async (username, friendUsername) => {

    const error = {}
    const response = {}
    
    try {

        await API.addFriend(username, friendUsername).then(res => {
            response["msg"] = res.data; 
        
        });

        return response;

    } catch (err) {
        console.log(err)
        return error["mes"] = err.response.data.msg
    }
}