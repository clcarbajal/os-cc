import { WeeklySummary } from "@/components/reports/weekly-summary";
import { AccountBalances } from "@/components/dashboard/account-balances";
import { CostMetrics } from "@/components/dashboard/cost-metrics";
import { RecentTransactions } from "@/components/dashboard/recent-transactions";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <span className="text-sm text-gray-500">
          Week of {new Date().toLocaleDateString()}
        </span>
      </div>

      {/* Weekly Cash Flow Summary */}
      <WeeklySummary />

      {/* Key Metrics Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AccountBalances />
        <CostMetrics />
      </div>

      {/* Recent Activity */}
      <RecentTransactions />
    </div>
  );
}
