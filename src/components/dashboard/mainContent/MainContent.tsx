/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import CostTable from "../../shared/costTable/CustomCostTable";
import CredentialSection from "./Credential_Section";
import CostTableSection from "./CostTable_Section";
import FormSection from "./Form";

export default function MainContent() {
  const [formData, setFormData] = useState<any>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [fabricCosts, setFabricCosts] = useState([
    { id: 'fab-0', sl: "", ref: "", name: "", uom: "", qty: "", unitPrice: "", total: "" },
  ]);

  const [trimCosts, setTrimCosts] = useState([
    { id: 'trim-0', sl: "", ref: "", name: "", uom: "", qty: "", unitPrice: "", total: "" },
  ]);

  const [accessoriesCosts, setAccessoriesCosts] = useState([
    { id: 'acc-0', sl: "", ref: "", name: "", uom: "", qty: "", unitPrice: "", total: "" },
  ]);

  const [applicationCosts, setApplicationCosts] = useState([
    { id: 'app-0', sl: "", ref: "", name: "", type: "", placement: "", category: "", price: "" },
  ]);

  const [manufacturingCosts, setManufacturingCosts] = useState([
    { id: 'man-0', sl: "", name: "", onPrice: "" },
  ]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev: any) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.company) newErrors.company = "Company is required";
    if (!formData.date) newErrors.date = "Date is required";
    if (!formData.item) newErrors.item = "Item is required";
    if (!formData.styleNumber)
      newErrors.styleNumber = "Style Number is required";
    if (!formData.quantity) newErrors.quantity = "Quantity is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    console.log("Form Data:", formData);
  };

  const handleAddFabricRow = () => {
    setFabricCosts([
      ...fabricCosts,
      { id: `fab-${Date.now()}`, sl: '', ref: '', name: '', uom: '', qty: '', unitPrice: '', total: '' }
    ]);
  };

  const handleAddTrimRow = () => {
    setTrimCosts([
      ...trimCosts,
      { id: `trim-${Date.now()}`, sl: '', ref: '', name: '', uom: '', qty: '', unitPrice: '', total: '' }
    ]);
  };

  return (
    <main className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-sm p-6">
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <h2 className="text-sm font-semibold text-gray-600 uppercase mb-4">
              Style Information
            </h2>

            <div className="border rounded-lg p-6">
              <FormSection
                formData={formData}
                handleInputChange={handleInputChange}
                errors={errors}
              />
            </div>
          </div>

          <CredentialSection
            formData={formData}
            handleInputChange={handleInputChange}
          />

          <CostTable
            title="Fabric Cost"
            columns={["REF", "Name", "UOM", "QTY", "UNIT PRICE", "TOTAL"]}
            rows={fabricCosts}
            onRowChange={(rowIdx, field, value) => {
              const updated = [...fabricCosts];
              updated[rowIdx] = { ...updated[rowIdx], [field]: value };
              setFabricCosts(updated);
            }}
            onAddRow={handleAddFabricRow}
            onReorderRows={setFabricCosts}
          />

          <CostTable
            title="Trim Cost/Dz"
            columns={["REF", "Name", "UOM", "QTY", "UNIT PRICE", "TOTAL"]}
            rows={trimCosts}
            onRowChange={(rowIdx, field, value) => {
              const updated = [...trimCosts];
              updated[rowIdx] = { ...updated[rowIdx], [field]: value };
              setTrimCosts(updated);
            }}
            onAddRow={handleAddTrimRow}
            onReorderRows={setTrimCosts}
          />

          <CostTableSection
            accessoriesCosts={accessoriesCosts}
            setAccessoriesCosts={setAccessoriesCosts}
            applicationCosts={applicationCosts}
            setApplicationCosts={setApplicationCosts}
            manufacturingCosts={manufacturingCosts}
            setManufacturingCosts={setManufacturingCosts}
          />

          <div className="mt-8 flex justify-end">
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-2.5 rounded text-sm font-semibold uppercase"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}