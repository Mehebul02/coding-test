/* eslint-disable @typescript-eslint/no-explicit-any */
import { Calendar } from "lucide-react";
import { useForm } from "react-hook-form";
import FormField from "../shared/FormField";

export default function MainContent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log("FORM DATA SUBMITTED", data);
  };

  return (
    <main className="flex-1 overflow-y-auto p-6">
      <div className="w-full max-w-7xl mx-auto p-6 bg-white">
        <div className="mb-6">
          <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
            Style Information
          </h2>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="grid grid-cols-3 gap-x-4 gap-y-5">
              {/* Row 1 */}
              <FormField
                label="Company Name"
                name="company"
                type="select"
                register={register}
                errors={errors}
                rules={{ required: "Company is required" }}
              />

              <FormField
                label="Date"
                name="date"
                type="date"
                icon={Calendar}
                register={register}
                errors={errors}
                rules={{ required: "Date is required" }}
              />

              <FormField
                label="Item"
                name="item"
                type="select"
                register={register}
                errors={errors}
                rules={{ required: "Item is required" }}
              />

              {/* Row 2 */}
              <FormField
                label="Style Number"
                name="styleNumber"
                register={register}
                errors={errors}
                rules={{
                  required: "Style number required",
                  minLength: { value: 3, message: "Min 3 characters" },
                }}
              />

              <FormField
                label="Season"
                name="season"
                type="select"
                register={register}
                errors={errors}
                rules={{ required: "Season required" }}
              />

              <FormField
                label="Year"
                name="year"
                type="select"
                register={register}
                errors={errors}
                rules={{ required: "Year required" }}
              />

              {/* Row 3 */}
              <div></div>
              <div></div>
              <FormField
                label="Status"
                name="status"
                type="select"
                register={register}
                errors={errors}
                rules={{ required: "Status required" }}
              />

              {/* Row 4 */}
              <FormField
                label="Department"
                name="department"
                type="select"
                register={register}
                errors={errors}
                rules={{ required: "Department required" }}
              />

              <FormField
                label="Terms of Sales"
                name="terms"
                type="select"
                register={register}
                errors={errors}
                rules={{ required: "Terms required" }}
              />

              <FormField
                label="Division"
                name="division"
                type="select"
                register={register}
                errors={errors}
                rules={{ required: "Division required" }}
              />

              {/* Row 5 */}
              <div></div>
              <div></div>
              <FormField
                label="Label / Brand"
                name="brand"
                type="select"
                register={register}
                errors={errors}
                rules={{ required: "Brand required" }}
              />

              {/* Row 6 */}
              <FormField
                label="Quantity"
                name="quantity"
                type="text"
                register={register}
                errors={errors}
                rules={{
                  required: "Quantity required",
                  pattern: { value: /^[0-9]+$/, message: "Only numbers allowed" },
                }}
              />

              <FormField
                label="Costing By"
                name="costingBy"
                type="select"
                register={register}
                errors={errors}
                rules={{ required: "Required" }}
              />

              <FormField
                label="Currency"
                name="currency"
                type="select"
                register={register}
                errors={errors}
                rules={{ required: "Currency required" }}
              />

              {/* Row 7 */}
              <FormField
                label="Access To"
                name="accessTo"
                type="select"
                register={register}
                errors={errors}
                rules={{ required: "Access required" }}
              />
            </div>

          
            <div className="mt-6 flex justify-end">
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded text-sm font-medium"
              >
                SUBMIT
              </button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
