import Axios from "axios"

export const refreshJWT = () => {
    Axios
    .get(`${process.env.REACT_APP_API_URL}/refreshJWT`,  {headers: { Authorization: `Bearer ${localStorage.getItem("key")}` }})
    .then((auth) => {

        console.log("Aktualisierter JWT: ", auth.data.key)
        localStorage.setItem("key", auth.data.key);

    })
    .catch((err) => {

        console.log("Fehler beim Aktualisieren des JWT: ", localStorage.getItem("key"))

    });
}