import axios from "axios";

export const axiosInstance = axios.create({});

export const apiConnector = async (method, url, bodyData = null, headers = {}, params = null) => {
    try {
        const response = await axiosInstance({
            method,
            url,
            data: bodyData || null,
            headers: headers,
            params: params || null,
        });
        return response;
    } catch (error) {
        console.error("API Error:", error);
        throw error;
    }
};
