import axios from "axios";

const instance = axios.create({
    baseURL: "https://shoppingcart-bf572-default-rtdb.firebaseio.com/",
});

export default instance;