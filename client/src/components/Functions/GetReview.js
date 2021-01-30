import API from "../../utils/API";

export const GetReview = async (id) => {
    await API.getReview(id).then(res => console.log(res));
}