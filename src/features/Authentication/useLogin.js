import { useMutation } from "@tanstack/react-query";
import { login } from "../../services/apiAuth";


export function useLogin() {
    const siginIn = useSignIn();

    const mustation = useMutation({
        mutationFn: login,

        onSuccess: (data) => {
            const signedin = siginIn({
                token: data.accessToken,
                expiresIn: 3600, // 1 hour
                tokenType: "Bearer",
                authState: {
                    user: data.user
                },
            })

            if (signedin) {
                toast.success(
                    "Login successful!");
            }
            else toast.error("Login persistence failed");

        }, onError: (error) => {
            toast.error(error.response?.data?.message || "Failed to create account. Please try again.");
        }
    })
    return mustation;
}