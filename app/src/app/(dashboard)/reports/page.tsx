import Link from "next/link";

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Weekly Reports</h1>
        <Link
          href="/reports/new"
          className="rounded-md bg-primary-600 px-4 py-2 text-white hover:bg-primary-700 transition-colors"
        >
          Generate New Report
        </Link>
      </div>

      <div className="card">
        <p className="text-gray-500">
          Weekly cash flow reports will be displayed here. Reports are auto-generated every Monday.
        </p>
        {/* Report list will be implemented here */}
      </div>
    </div>
  );
}
