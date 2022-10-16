import axios from "axios"

const api = axios.create({
    baseURL: "https://dev.info-rmi.com/itaskhorse/ISAPI.dll"
})

api.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

export default api