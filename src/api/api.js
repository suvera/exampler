import axios from "axios";

const BASE_URL = "https://suvera.xyz/exms/student";

export const api = {
    get: async (url, params, headers = {}) => {
        const token = sessionStorage.getItem("token");
        const config = {
            headers: {
                token: token,
                ...headers,
            },
            params,
        };
        return axios.get(url, config);
    },
    post: async (url, formData, headers = {}) => {
        const token = sessionStorage.getItem("token");
        const config = {
            method: "post",
            url:url,
            headers: {
                token: token,
                ...headers,
            },
            data: formData,
        };
        return axios(config);
    },
    put: async (url, params, headers = {}) => {
        const token = sessionStorage.getItem("token");
        const config = {
            method: "put",
            url: url,
            headers: {
                token: token,
                ...headers,
            },
            data: params,
        };
        return axios(config);
    },
    delete: async (url, params, headers = {}) => {
        const token = sessionStorage.getItem("token");
        const config = {
            method: "delete",
            url: url,
            headers: {
                token: token,
                ...headers,
            },
            data: params,
        };
        return axios(config);
    },

    endpoints: {
        auth: {
            login: BASE_URL + "/login",
        },
        exams: {
            completed_exams: BASE_URL + "/exams/completed?offset=0&limit=20",
        }
    }


}