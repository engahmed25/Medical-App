import { useQuery } from "@tanstack/react-query";
import { getDoctorById } from "../../services/apiDoctors";

export function useDoctorById(id) {
    const {
        isLoading,
        data: doctor,
        error,
    } = useQuery({
        queryKey: ["doctor", id],
        queryFn: () => getDoctorById(id),
        enabled: !!id, // Only run query if id exists
    });

    return { isLoading, doctor, error };
}
