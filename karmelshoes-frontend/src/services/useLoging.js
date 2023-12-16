/* eslint-disable no-useless-catch */
import axios from "axios";

export const logingAuthentication = async ({userName, password}) => {
    try {
        return await axios.post("http://localhost:9090/login", 
        {
            userName, 
            password,
        }
    );
    } catch (error) {
        throw error;
    }
} 