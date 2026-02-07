import type { UseFormRegister } from "react-hook-form";

/* eslint-disable @typescript-eslint/no-explicit-any */
interface FormFieldProps {
  label: string;
  name: string;
  type?: "text" | "select" | "date";
  options?: string[];
  placeholder?: string;
  icon?: any;
  register: UseFormRegister<any>;
  errors: any;
  rules?: any;
}

const FormField = ({
  label,
  name,
  type = "text",
  options = [],
  placeholder,
  icon: Icon,
  register,
  errors,
  rules,
}: FormFieldProps) => {
  const hasError = errors?.[name];

  return (
    <div className="flex flex-col gap-1">
      <label className="text-[11px] font-medium text-gray-600 uppercase tracking-wide">
        {label}
      </label>

      <div className="relative">
        {type === "select" ? (
          <select
            {...register(name, rules)}
            className={`w-full border rounded px-3 py-2.5 text-sm bg-white appearance-none pr-8 focus:outline-none
              ${hasError ? "border-red-500" : "border-gray-300"}`}
          >
            <option value="">
              {placeholder || `Select ${label.toLowerCase()}`}
            </option>
            {options.map((item, idx) => (
              <option key={idx} value={item}>
                {item}
              </option>
            ))}
          </select>
        ) : (
          <input
            type={type}   // ✅ date হলে calendar auto open
            placeholder={placeholder}
            {...register(name, rules)}
            className={`w-full border rounded px-3 py-2.5 text-sm bg-white focus:outline-none
              ${hasError ? "border-red-500" : "border-gray-300"}`}
          />
        )}

        {/* Select arrow */}
        {type === "select" && (
          <svg
            className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        )}

        {/* Calendar icon */}
        {Icon && (
          <Icon className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-yellow-500 pointer-events-none" />
        )}
      </div>

      {hasError && (
        <span className="text-[10px] text-red-500">
          {hasError.message as string}
        </span>
      )}
    </div>
  );
};

export default FormField;
