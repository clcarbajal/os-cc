export default function AccountsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Bank Accounts</h1>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Operating Account */}
        <div className="card">
          <h2 className="text-lg font-semibold text-gray-900">Operating Account</h2>
          <p className="mt-1 text-sm text-gray-500">Credit card & cash deposits</p>
          <p className="mt-4 text-3xl font-bold text-gray-900">$0.00</p>
        </div>

        {/* Payroll Account */}
        <div className="card">
          <h2 className="text-lg font-semibold text-gray-900">Payroll Account</h2>
          <p className="mt-1 text-sm text-gray-500">Weekly payroll funds</p>
          <p className="mt-4 text-3xl font-bold text-gray-900">$0.00</p>
        </div>

        {/* Sales Tax Account */}
        <div className="card">
          <h2 className="text-lg font-semibold text-gray-900">Sales Tax Account</h2>
          <p className="mt-1 text-sm text-gray-500">Tax reserves</p>
          <p className="mt-4 text-3xl font-bold text-gray-900">$0.00</p>
        </div>
      </div>

      <div className="card">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Transactions</h2>
        <p className="text-gray-500">Transaction history will be displayed here.</p>
      </div>
    </div>
  );
}
