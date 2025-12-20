import { useMutation } from "@tanstack/react-query";
import { patientSignUp } from "../../services/apiAuth";
import { useSignIn } from "react-auth-kit";
import toast from "react-hot-toast";


export function useSignUpPatient() {

    const siginIn = useSignIn();

    const mustation = useMutation({
        mutationFn: patientSignUp,

        onSuccess: (data) => {
            //! now after signup we need to signIn the user directly as we get the token from the signup API this will done using react-auth-kit's signIn function
            const signedin = siginIn({
                token: data.accessToken,
                expiresIn: 3600, // 1 hour
                tokenType: "Bearer",
                //! this is the user object we get from the API so lately we can do const auth = useAuthUser(); const user = auth()?.user; yo get his data
                //? so this authState is where the user data that comes from the API will be stored in react-auth-kit
                authState: {
                    user: data.user
                },
            })

            if (signedin) {
                toast.success(
                    "Account successfully created! Please verufy the new account from the user's email address."
                );
            }
            else toast.error("Login persistence failed");

        }, onError: (error) => {
            toast.error(error.response?.data?.message || "Failed to create account. Please try again.");
        }
    })
    return mustation;
}