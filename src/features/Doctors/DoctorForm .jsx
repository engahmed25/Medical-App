import React from "react";
import { useForm } from "react-hook-form";
import FormInput from "../../features/Authentication/FormInput.jsx";
import Button from "../../ui/Button.jsx";

/**
 * DoctorForm
 * @param {{ initialValues?: object, onSubmit?: function }} props
 * @returns {React.ReactElement}
 */
export default function DoctorForm({ initialValues = {}, onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: initialValues });

  const internalSubmit = (data) => {
    if (typeof onSubmit === "function") onSubmit(data);
    else console.log("DoctorForm submitted:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(internalSubmit)}
      className="max-w-2xl mx-auto bg-white rounded-xl shadow-sm p-6 mt-8"
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <img
            src={initialValues.avatar || "https://via.placeholder.com/80"}
            alt="doctor avatar"
            className="w-20 h-20 rounded-md object-cover border"
          />
          <div>
            <h3 className="text-sm text-gray-500">Profile Information</h3>
            <p className="text-lg font-semibold">
              Manage your personal and professional details
            </p>
          </div>
        </div>

        <div>
          <button
            type="button"
            className="flex items-center gap-2 border rounded-md px-3 py-1 text-sm hover:bg-gray-50"
          >
            Edit
          </button>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4">
        <FormInput
          label="Full Name"
          name="fullName"
          placeholder="Dr. Name"
          register={register}
          error={errors.fullName}
          validation={{ required: "Full name is required" }}
        />

        <FormInput
          label="Email Address"
          type="email"
          name="email"
          placeholder="@gmail.com"
          register={register}
          error={errors.email}
          validation={{
            required: "Email is required",
            pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email format" },
          }}
        />

        <FormInput
          label="Phone Number"
          name="phone"
          placeholder="+1 (555) 123-4567"
          register={register}
          error={errors.phone}
          validation={{ required: "Phone number is required" }}
        />

        <FormInput
          label="Specialty"
          name="specialty"
          placeholder="Cardiology"
          register={register}
          error={errors.specialty}
        />

        <FormInput
          label="Office Location"
          name="office"
          placeholder="Giza Medical Center, Suite 402"
          register={register}
          error={errors.office}
        />

        {/* Professional Bio (textarea) */}
        <div className="flex flex-col items-start gap-1">
          <label className="ml-0.5">Professional Bio</label>
          <textarea
            className="border-[1px] border-gray-300 rounded-lg p-2 w-full min-h-[120px]"
            placeholder={"Dr. Reed specializes in..."}
            {...register("bio", { required: "Bio is required" })}
          />
          {errors.bio && (
            <span className="text-red-500 text-sm">{errors.bio.message}</span>
          )}
        </div>

        {/* Save Button */}
        <div className="pt-2">
          <Button type="submit" className="w-full py-3">
            Save Changes
          </Button>
        </div>
      </div>
    </form>
  );
}
