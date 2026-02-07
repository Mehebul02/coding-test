/* eslint-disable @typescript-eslint/no-explicit-any */
import CostTable from "../../shared/costTable/CustomCostTable";

interface CostTableSectionProps {
  accessoriesCosts: any[];
  setAccessoriesCosts: React.Dispatch<React.SetStateAction<any[]>>;
  applicationCosts: any[];
  setApplicationCosts: React.Dispatch<React.SetStateAction<any[]>>;
  manufacturingCosts: any[];
  setManufacturingCosts: React.Dispatch<React.SetStateAction<any[]>>;
}

const CostTableSection = ({
  accessoriesCosts,
  setAccessoriesCosts,
  applicationCosts,
  setApplicationCosts,
  manufacturingCosts,
  setManufacturingCosts
}: CostTableSectionProps) => {

  const handleAddAccessoriesRow = () => {
    setAccessoriesCosts([
      ...accessoriesCosts,
      { id: `acc-${Date.now()}`, ref: '', name: '', uom: '', qty: '', 'unit price': '', total: '' }
    ]);
  };

  const handleAddApplicationRow = () => {
    setApplicationCosts([
      ...applicationCosts,
      { id: `app-${Date.now()}`, ref: '', name: '', type: '', placement: '', category: '', price: '' }
    ]);
  };

  const handleAddManufacturingRow = () => {
    setManufacturingCosts([
      ...manufacturingCosts,
      { id: `man-${Date.now()}`, name: '', 'on price': '' }
    ]);
  };

  return (
    <div>
      <CostTable
        title="Accessories Cost/Dz"
        columns={['REF', 'Name', 'UOM', 'QTY', 'UNIT PRICE', 'TOTAL']}
        rows={accessoriesCosts}
        onRowChange={(rowIdx, field, value) => {
          const updated = [...accessoriesCosts];
          updated[rowIdx] = { ...updated[rowIdx], [field]: value };
          setAccessoriesCosts(updated);
        }}
        onAddRow={handleAddAccessoriesRow}
        onReorderRows={setAccessoriesCosts}
      />

      <CostTable
        title="Application Cost/Dz"
        columns={['REF', 'Name', 'Type', 'Placement', 'Category', 'Price']}
        rows={applicationCosts}
        onRowChange={(rowIdx, field, value) => {
          const updated = [...applicationCosts];
          updated[rowIdx] = { ...updated[rowIdx], [field]: value };
          setApplicationCosts(updated);
        }}
        onAddRow={handleAddApplicationRow}
        onReorderRows={setApplicationCosts}
      />

      <CostTable
        title="Cost of Manufacturing/Dz"
        columns={['Name', 'ON PRICE']}
        rows={manufacturingCosts}
        onRowChange={(rowIdx, field, value) => {
          const updated = [...manufacturingCosts];
          updated[rowIdx] = { ...updated[rowIdx], [field]: value };
          setManufacturingCosts(updated);
        }}
        onAddRow={handleAddManufacturingRow}
        onReorderRows={setManufacturingCosts}
      />
    </div>
  );
};

export default CostTableSection;