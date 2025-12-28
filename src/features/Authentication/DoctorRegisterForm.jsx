import { useForm } from "react-hook-form";
import FormRow from "./FormRow";
import FormInput from "./FormInput";
import Button from "../../ui/Button";
import Select from "./Select";
import { useDoctorRegister } from "../../Context/DoctorRegisterContext";

const specializationOptions = [
  "Cardiology",
  "Dermatology",
  "Pediatrics",
  "General Practice",
  "Neurology",
  "Other",
];

function DoctorRegisterForm({ onNext }) {
  const { updateFormData, formData } = useDoctorRegister();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: formData.step1,
  });

  const selectedSpecialization = watch("specialization", "");

  const onSubmit = (data) => {
    updateFormData("step1", data);
    onNext();
  };

  return (
    <div className="w-full h-screen flex items-center justify-center flex-col">
      <h2 className="mb-5 flex items-center justify-center font-bold text-3xl">
        WELCOME DOCTOR 👨‍⚕️
      </h2>
      <form
        className="shadow-[0px_5px_15px_RGBA(0,0,0,0.35)] p-12 rounded-2xl h-[77%] overflow-auto w-[90%] md:w-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormRow>
          <FormInput
            label="First Name"
            name="firstName"
            type="text"
            placeholder="First Name"
            register={register}
            error={errors.firstName}
            validation={{ required: "First name is required" }}
          />
          <FormInput
            label="Last Name"
            name="lastName"
            type="text"
            placeholder="Last Name"
            register={register}
            error={errors.lastName}
            validation={{ required: "Last name is required" }}
          />
        </FormRow>

        <FormRow>
          <FormInput
            label="Email"
            name="email"
            type="email"
            placeholder="Email"
            register={register}
            error={errors.email}
            validation={{
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            }}
          />
          <FormInput
            label="Password"
            name="password"
            type="password"
            placeholder="Password"
            register={register}
            error={errors.password}
            validation={{
              required: "Password is required",
              minLength: { value: 6, message: "Minimum 6 characters" },
            }}
          />
        </FormRow>

        <FormRow>
          <FormInput
            label="Phone Number"
            name="phoneNumber"
            type="tel"
            placeholder="Phone Number"
            register={register}
            error={errors.phoneNumber}
            validation={{ required: "Phone number is required" }}
          />
          <FormInput
            label="Years of Experience"
            name="yearsOfExperience"
            type="number"
            placeholder="Years of Experience"
            register={register}
            error={errors.yearsOfExperience}
            validation={{
              required: "Experience is required",
              min: { value: 0, message: "Must be zero or greater" },
            }}
          />
        </FormRow>

        <div className="mb-6 flex flex-col items-start gap-1">
          <label className="ml-0.5">Gender</label>
          <select
            className="border-[1px] border-gray-300 rounded-lg p-2 w-full bg-white"
            {...register("gender", { required: "Gender is required" })}
          >
            <option disabled value="">
              Select your gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && (
            <span className="text-red-500 text-sm">
              {errors.gender.message}
            </span>
          )}
        </div>

        <Select
          register={register}
          errors={errors}
          selectedSpecialization={selectedSpecialization}
          options={specializationOptions}
          label="Specialization"
          name="specialization"
          validation={{ required: "Specialization is required" }}
        />

        <FormInput
          label="Clinic Address"
          name="clinicAddress"
          type="text"
          placeholder="Clinic Address"
          register={register}
          error={errors.clinicAddress}
          validation={{ required: "Clinic address is required" }}
          className="mb-4"
        />

        <FormInput
          label="Bio"
          name="bio"
          type="text"
          placeholder="Short bio"
          register={register}
          error={errors.bio}
          validation={{ required: "Bio is required" }}
          className="mb-4"
        />

        <Button type="submit" className="w-full p-2.5" disabled={isSubmitting}>
          {isSubmitting ? "Forwarding..." : "Next: Upload Documents"}
        </Button>
      </form>
    </div>
  );
}

export default DoctorRegisterForm;
