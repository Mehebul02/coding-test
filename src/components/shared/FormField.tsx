import React from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
interface FormFieldProps {
  label: string;
  name: string;
  type?: "text" | "select" | "date";
  options?: string[];
  placeholder?: string;
  icon?: React.ReactNode;
  value?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  error?: string;
}

const FormField = ({
  label,
  name,
  type = "text",
  options = [],
  placeholder,
  icon,
  value,
  onChange,
  error,
}: FormFieldProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs font-medium text-gray-600 uppercase">
        {label}
      </label>

      <div className="relative">
        {type === "select" ? (
          <select
            name={name}
            value={value ?? ""}
            onChange={onChange}
            className={`w-full border rounded px-3 py-2 text-sm appearance-none focus:outline-none ${
              error ? "border-red-500" : "focus:border-blue-500"
            }`}
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
            type={type}
            name={name}
            value={value ?? ""}
            placeholder={placeholder}
            onChange={onChange}
            className={`w-full border rounded px-3 py-2 text-sm focus:outline-none ${
              error ? "border-red-500" : "focus:border-blue-500"
            }`}
          />
        )}

        {icon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            {icon}
          </div>
        )}
      </div>

      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
};

export default FormField;
