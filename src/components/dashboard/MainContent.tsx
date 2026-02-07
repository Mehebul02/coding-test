import { Calendar } from "lucide-react";
import FormField from "../shared/FormField";

export default function MainContent() {
  return (
    <main className="flex-1 overflow-y-auto p-6">
     
 <div className="w-full max-w-7xl mx-auto p-6 bg-white">
      <div className="mb-6">
        <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
          Style Information
        </h2>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="grid grid-cols-3 gap-x-4 gap-y-5">
          {/* Row 1 */}
          <FormField label="Company Name" type="select" />
          <FormField label="Date" type="date" icon={Calendar} />
          <FormField label="Item" type="select" />

          {/* Row 2 */}
          <FormField label="Style Number" placeholder="" />
          <FormField label="Season" type="select" />
          <FormField label="Year" type="select" />

          {/* Row 3 */}
          <div></div>
          <div></div>
          <FormField label="Status" type="select" />

          {/* Row 4 */}
          <FormField label="Department" type="select" />
          <FormField label="Terms of Sales" type="select" />
          <FormField label="Division" type="select" />

          {/* Row 5 */}
          <div></div>
          <div></div>
          <FormField label="Label/Brand" type="select" />

          {/* Row 6 */}
          <FormField label="Quantity" type="text" placeholder="" />
          <FormField label="Costing By" type="select" />
          <FormField label="Currency" type="select" />

          {/* Row 7 */}
          <FormField label="Access To" type="select" />
        </div>

        {/* Select File Button */}
        <div className="mt-6 flex justify-end">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded text-sm font-medium flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            SELECT FILE
          </button>
        </div>
      </div>
    </div>

    </main>
  )
}
