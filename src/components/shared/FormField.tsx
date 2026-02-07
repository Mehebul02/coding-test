/* eslint-disable @typescript-eslint/no-explicit-any */
interface FormFieldProps {
    label: string;
    type?: "text" | "select" | "date" | undefined;
    options?: string[];
    placeholder?: string;
    icon?: any;
}
const FormField = ({ label, type = "text", options = [], placeholder, icon: Icon }: FormFieldProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-[11px] font-medium text-gray-600 uppercase tracking-wide">
        {label}
      </label>
      <div className="relative">
        {type === "select" ? (
          <select className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm text-gray-700 bg-white appearance-none focus:outline-none focus:border-gray-400 cursor-pointer pr-8">
            <option value="">{placeholder || `Select ${label.toLowerCase()}`}</option>
            {options.map((item, idx) => (
              <option key={idx} value={item}>{item}</option>
            ))}
          </select>
        ) : type === "date" ? (
          <input
            type="text"
            placeholder={placeholder}
            className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm text-gray-700 bg-white focus:outline-none focus:border-gray-400"
          />
        ) : (
          <input
            type={type}
            placeholder={placeholder}
            className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm text-gray-700 bg-white focus:outline-none focus:border-gray-400"
          />
        )}
        {type === "select" && (
          <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        )}
        {Icon && (
          <Icon className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-yellow-500" />
        )}
      </div>
    </div>
  );
};

export default FormField;