import { useMutation } from "@tanstack/react-query";
import { doctorSignUp } from "../../services/apiAuth";
import toast from "react-hot-toast";


export function useSignUpDoctor() {

    const mutation = useMutation({
        mutationFn: doctorSignUp,
        onSuccess: (data) => {
            toast.success(
                "Doctor registration successful. Wait for admin approval."
            );
        }, onError: (error) => {
            toast.error(error.response?.data?.message || "Failed to create account. Please try again.");
        }
    })
    return {
        signUpAsync: mutation.mutateAsync,
        isLoading: mutation.isPending,
    };
}