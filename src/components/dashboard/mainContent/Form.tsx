import { Calendar } from "lucide-react";
import FormField from "../../shared/FormField";

interface FormData {
  company: string;
  date: string;
  item: string;
  styleNumber: string;
  season: string;
  year: string;
  status: string;
  department: string;
  terms: string;
  division: string;
  brand: string;
  quantity: string;
  costingBy: string;
  currency: string;
  accessTo: string;
}

const FormSection = ({
  formData,
  handleInputChange,
  errors,
}: {
  formData: FormData;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  errors: Record<string, string>;
}) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 gap-y-5">
      <FormField
        label="Company Name"
        name="company"
        type="select"
        options={["Company A", "Company B", "Company C"]}
        value={formData.company}
        onChange={handleInputChange}
        error={errors.company}
      />

      <FormField
        label="Date"
        name="date"
        type="date"
        value={formData.date}
        onChange={handleInputChange}
        error={errors.date}
        icon={<Calendar className="w-4 h-4 text-yellow-500" />}
      />

      <FormField
        label="Item"
        name="item"
        type="select"
        options={["Item 1", "Item 2", "Item 3"]}
        value={formData.item}
        onChange={handleInputChange}
        error={errors.item}
      />

      <FormField
        label="Style Number"
        name="styleNumber"
        value={formData.styleNumber}
        onChange={handleInputChange}
        placeholder="Enter style number"
        error={errors.styleNumber}
      />

      <FormField
        label="Season"
        name="season"
        type="select"
        options={["Spring", "Summer", "Fall", "Winter"]}
        value={formData.season}
        onChange={handleInputChange}
      />

      <FormField
        label="Year"
        name="year"
        type="select"
        options={["2024", "2025", "2026"]}
        value={formData.year}
        onChange={handleInputChange}
      />

      <FormField
        label="Status"
        name="status"
        type="select"
        options={["Active", "Inactive", "Draft"]}
        value={formData.status}
        onChange={handleInputChange}
      />

      <FormField
        label="Department"
        name="department"
        type="select"
        options={["Department A", "Department B", "Department C"]}
        value={formData.department}
        onChange={handleInputChange}
      />

      <FormField
        label="Terms of Sales"
        name="terms"
        type="select"
        options={["Term 1", "Term 2", "Term 3"]}
        value={formData.terms}
        onChange={handleInputChange}
      />

      <FormField
        label="Division"
        name="division"
        type="select"
        options={["Division 1", "Division 2", "Division 3"]}
        value={formData.division}
        onChange={handleInputChange}
      />

      <FormField
        label="Label / Brand"
        name="brand"
        type="select"
        options={["Brand A", "Brand B", "Brand C"]}
        value={formData.brand}
        onChange={handleInputChange}
      />

      <FormField
        label="Quantity"
        name="quantity"
        value={formData.quantity}
        onChange={handleInputChange}
        placeholder="Enter quantity"
        error={errors.quantity}
      />

      <FormField
        label="Costing By"
        name="costingBy"
        type="select"
        options={["Unit", "Total", "Per Unit"]}
        value={formData.costingBy}
        onChange={handleInputChange}
      />

      <FormField
        label="Currency"
        name="currency"
        type="select"
        options={["USD", "EUR", "GBP", "BDT"]}
        value={formData.currency}
        onChange={handleInputChange}
      />

      <FormField
        label="Access To"
        name="accessTo"
        type="select"
        options={["Everyone", "Team", "Self"]}
        value={formData.accessTo}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default FormSection;
