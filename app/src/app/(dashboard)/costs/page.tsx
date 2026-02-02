export default function CostsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Cost Analysis</h1>

      {/* Cost Summary Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        <div className="card">
          <h2 className="text-lg font-semibold text-gray-900">Food Cost</h2>
          <div className="mt-4 flex items-end justify-between">
            <div>
              <p className="text-3xl font-bold text-gray-900">0%</p>
              <p className="text-sm text-gray-500">of weekly sales</p>
            </div>
            <span className="status-badge-success">On Target</span>
          </div>
        </div>

        <div className="card">
          <h2 className="text-lg font-semibold text-gray-900">Labor Cost</h2>
          <div className="mt-4 flex items-end justify-between">
            <div>
              <p className="text-3xl font-bold text-gray-900">0%</p>
              <p className="text-sm text-gray-500">of weekly sales</p>
            </div>
            <span className="status-badge-success">On Target</span>
          </div>
        </div>

        <div className="card">
          <h2 className="text-lg font-semibold text-gray-900">Alcohol Cost</h2>
          <div className="mt-4 flex items-end justify-between">
            <div>
              <p className="text-3xl font-bold text-gray-900">0%</p>
              <p className="text-sm text-gray-500">of weekly sales</p>
            </div>
            <span className="status-badge-success">On Target</span>
          </div>
        </div>
      </div>

      {/* Prime Cost */}
      <div className="card">
        <h2 className="text-lg font-semibold text-gray-900">Prime Cost (Food + Labor)</h2>
        <div className="mt-4">
          <p className="text-3xl font-bold text-gray-900">0%</p>
          <p className="text-sm text-gray-500">Industry target: &lt; 65%</p>
        </div>
      </div>

      {/* Discounts & Voids */}
      <div className="card">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Discounts & Voids</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <p className="text-sm text-gray-500">Total Discounts</p>
            <p className="text-2xl font-bold text-gray-900">$0.00</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Total Voids</p>
            <p className="text-2xl font-bold text-gray-900">$0.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}
