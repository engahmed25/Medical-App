import React from "react";
import { Form, useForm } from "react-hook-form";
import FormInput from "./FormInput";
import Doctor from "./FormRow";
import FormRow from "./FormRow";
const specializations = [
  "Cardiology",
  "Dermatology",
  "Neurology",
  "Pediatrics",
  "Psychiatry",
  "Radiology",
  "Surgery",
  "Orthopedics",
  "Gynecology",
  "Oncology",
  "Anesthesiology",
  "Emergency Medicine",
  "Family Medicine",
  "Internal Medicine",
  "Ophthalmology",
  "Other",
];
const timeSlots = [
  "08:00 AM",
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
  "06:00 PM",
  "07:00 PM",
  "08:00 PM",
];
function DoctorRegisterForm() {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm();

  //! this watch comes from react hook form to watch the specialization field
  const selectedSpecialization = watch("specialization");

  const onSubmit = async (data) => {
    try {
      console.log("Register data:", data);
      // TODO: integrate with auth API (e.g., call register service)
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="w-full h-[100vh] grid place-content-center">
      <h2 className="mb-5 flex  items-center justify-center font-bold text-3xl ">
        WELCOME DOCTOR 🥼
      </h2>
      <form
        className="shadow-[0px_5px_15px_rgba(0,0,0,0.35)] p-12 rounded-2xl h-[400px] overflow-auto md:h-auto"
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
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email",
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
            label="Years of Experience"
            name="yearsOfExperience"
            type="number"
            placeholder="Years of Experience"
            register={register}
            error={errors.yearsOfExperience}
            validation={{ required: "Years of Experience is required" }}
          />
          <FormInput
            label="Phone Number"
            name="phoneNumber"
            type="number"
            placeholder="Phone Number"
            register={register}
            error={errors.phoneNumber}
            validation={{ required: "Phone Number is required" }}
          />
        </FormRow>
        <FormRow>
          <FormInput
            label="Clinic Address"
            name="clinicAddress"
            type="text"
            placeholder="Clinic Address"
            register={register}
            error={errors.clinicAddress}
            validation={{ required: "Clinic Address is required" }}
          />
          {/* <FormInput
            label="Sart Time"
            name="startTime"
            type="time"
            placeholder="Start Time"
            register={register}
            error={errors.startTime}
            validation={{ required: "Start time is required" }}
          />

          <FormInput
            label="End Time"
            name="endTime"
            type="time"
            placeholder="End Time"
            register={register}
            error={errors.endTime}
            validation={{ required: "End time is required" }}
          /> */}
          <FormInput
            label="Medical License Number"
            name="medicalLicenseNumber"
            type="text"
            placeholder="Medical License Number"
            register={register}
            error={errors.medicalLicenseNumber}
            validation={{ required: "Medical License Number is required" }}
          />
        </FormRow>
        {/* we will make it combo box as a feature */}
        {/* Specialization Select */}
        <div className="mb-6 flex flex-col items-start gap-1">
          <label className="ml-0.5">Specialization</label>
          <select
            className="border-[1px] border-gray-300 rounded-lg p-2 w-full bg-white"
            {...register("specialization", { required: true })}
          >
            <option disabled value="">
              Select your specialization
            </option>
            {specializations.map((spec) => (
              <option key={spec} value={spec}>
                {spec}
              </option>
            ))}
          </select>
          {errors.specialization && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>
        {/* Conditional Input - Shows when "Other" is selected */}
        {selectedSpecialization === "Other" && (
          <div className="mb-6 flex flex-col items-start gap-1">
            <label className="ml-0.5">Please specify your specialization</label>
            <input
              className="border-[1px] border-gray-300 rounded-lg p-2 w-full"
              type="text"
              {...register("otherSpecialization", {
                required:
                  selectedSpecialization === "Other"
                    ? "Please specify your specialization"
                    : false,
              })}
              placeholder="Enter your specialization"
            />
            {errors.otherSpecialization && (
              <span className="text-red-500 text-sm">
                {errors.otherSpecialization.message}
              </span>
            )}
          </div>
        )}
        <button
          type="submit"
          className="bg-[var(--main-color)] p-2.5 rounded-[10px] w-full cursor-pointer text-white font-bold transition-colors duration-500  hover:bg-[var(--main-lite-color)]"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Forwarding..." : "Upload Files"}
        </button>
      </form>
    </div>
  );
}

export default DoctorRegisterForm;
