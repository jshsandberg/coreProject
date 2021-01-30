import API from "../../utils/API"

export const saveReview = async (event, value, user, spotifyId, rating) => {
    event.preventDefault();
    try {

        let review = {
            spotifyId: spotifyId,
            review: value,
            rating: rating || " "
        };

        await API.saveReview(user._id, review).then(res => console.log(res))

    } catch (err) {
        console.log(err)
    }



}