import API from "../../utils/API";

export const GetReview = async (id) => {

    const filterReview = async (user) => {
        for(let i = 0; i < user.reviews.length; i++) {
            // console.log(user.username + JSON.stringify(user.reviews[i]))
            let revObj = {
                username: user.username,
                review: JSON.stringify(user.reviews[i])
            }
            arr.push(revObj);
        }
    }

    let data = {};

    let arr = [];

    let finalArr = [];

    await API.getReview(id).then(res => {
        data["response"] = res.data;
    });

    for(let i= 0; i < data.response.length; i++) {
        filterReview(data.response[i])
    }

    for(let i = 0; i < arr.length; i++) {
        console.log(arr[i])
        if (arr[i].review.spotifyId === id) {
            console.log(arr[i])
            // finalArr.push(arr[i])
        }
    }


    return data
}