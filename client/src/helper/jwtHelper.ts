import Axios from "axios"

export const refreshJWT = () => {
    Axios
    .get(`${process.env.REACT_APP_API_URL}/refreshJWT`,  {headers: { Authorization: `Bearer ${localStorage.getItem("key")}` }})
    .then((auth) => {

        localStorage.setItem("key", auth.data.key);

    });
}