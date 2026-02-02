export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Settings</h1>

      {/* Restaurant Settings */}
      <div className="card">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Restaurant Settings</h2>
        <p className="text-gray-500">Configure restaurant details and cost targets.</p>
      </div>

      {/* Integration Settings */}
      <div className="card">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Integrations</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between py-3 border-b">
            <div>
              <p className="font-medium text-gray-900">Toast POS</p>
              <p className="text-sm text-gray-500">Point of sale integration</p>
            </div>
            <button className="rounded-md border border-gray-300 px-3 py-1.5 text-sm hover:bg-gray-50">
              Connect
            </button>
          </div>
          <div className="flex items-center justify-between py-3 border-b">
            <div>
              <p className="font-medium text-gray-900">QuickBooks</p>
              <p className="text-sm text-gray-500">Accounting integration</p>
            </div>
            <button className="rounded-md border border-gray-300 px-3 py-1.5 text-sm hover:bg-gray-50">
              Connect
            </button>
          </div>
          <div className="flex items-center justify-between py-3 border-b">
            <div>
              <p className="font-medium text-gray-900">Gusto / Toast Payroll</p>
              <p className="text-sm text-gray-500">Payroll integration</p>
            </div>
            <button className="rounded-md border border-gray-300 px-3 py-1.5 text-sm hover:bg-gray-50">
              Connect
            </button>
          </div>
          <div className="flex items-center justify-between py-3">
            <div>
              <p className="font-medium text-gray-900">Bank Accounts (Plaid)</p>
              <p className="text-sm text-gray-500">Bank account connections</p>
            </div>
            <button className="rounded-md border border-gray-300 px-3 py-1.5 text-sm hover:bg-gray-50">
              Connect
            </button>
          </div>
        </div>
      </div>

      {/* Cost Targets */}
      <div className="card">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Cost Targets</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Food Cost Target (%)
            </label>
            <input
              type="number"
              placeholder="30"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Labor Cost Target (%)
            </label>
            <input
              type="number"
              placeholder="30"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Alcohol Cost Target (%)
            </label>
            <input
              type="number"
              placeholder="20"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
