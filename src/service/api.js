import axios from "axios";

export const Apihub = axios.create({
    baseURL: "https://kenziehub.herokuapp.com/",
    timeout: 5000
})