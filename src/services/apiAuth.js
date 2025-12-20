
import axiosClient from "./axiosClient";


// patient signUp (this return JWT as user will directly login after signUp)
export async function patientSignUp(patientData) {
    try {
        const res = await axiosClient.post('/patients/signup', patientData);
        return res.data; //! here we take access Token and user from the API
    } catch (error) {

        throw error;
    }
}

// Doctor SignUp (this doesn't return JWT as doctor needs admin approval first)
export async function doctorSignUp(doctorData) {
    try {
        const res = await axiosClient.post('/doctors/signup', doctorData);
        return res.data; //! here we take just a success message from the API
    } catch (error) {

        throw error;
    }
}


// Login (both patients and doctors)
export async function login(credentials) {
    try {
        const res = await axiosClient.post("/login", credentials);
        return res.data; //! here we take access Token and user from the API
    } catch (error) {

        throw error;
    }
}

async function signup(userData) {
    try {
        const response = await axiosClient.post('/users/register', userData);
        return response.data;
    } catch (error) {
        throw error;
    }
}
export { signup };