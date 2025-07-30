import axios from "axios";

// Axios instansiyası yarat
const apiClient = axios.create({
    baseURL: "http://localhost:3000", // əsas API url
    headers: {
        "Content-Type": "application/json",
    },
});

export default apiClient;