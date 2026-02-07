
import FormField from '../../shared/FormField';
interface FormData {
  tin: string;
  bin: string;
  supplierAcs: string;
  carrier: string;
}
const CredentialSection = ({ formData, handleInputChange }: { formData: FormData; handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void }) => {
    return (
        
             <div className="mb-6">
            <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-4">
              Credential
            </h2>

            <div className="border border-gray-200 rounded-lg p-6 bg-white">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="flex items-center gap-3">
                  <div className="bg-cyan-500 text-white rounded px-2 py-1 text-xs font-bold">+</div>
                  <FormField
                    label="TIN"
                    name="tin"
                    type="text"
                    value={formData.tin}
                    onChange={handleInputChange}
                    placeholder="Enter TIN"
                  />
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-red-500 text-white rounded px-2 py-1 text-xs font-bold">-</div>
                  <FormField
                    label="BIN"
                    name="bin"
                    type="text"
                    value={formData.bin}
                    onChange={handleInputChange}
                    placeholder="Enter BIN"
                  />
                </div>

                <div></div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-4">
                <FormField
                  label="Supplier ACS NO."
                  name="supplierAcs"
                  type="text"
                  value={formData.supplierAcs}
                  onChange={handleInputChange}
                  placeholder="Enter ACS NO."
                />

                <div></div>

                <FormField
                  label="Carrier"
                  name="carrier"
                  type="text"
                  value={formData.carrier}
                  onChange={handleInputChange}
                  placeholder="Enter Carrier"
                />
              </div>
            </div>
          </div>
       
    );
};

export default CredentialSection;