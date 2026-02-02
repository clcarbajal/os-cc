"use client";

import { ArrowUpRight, ArrowDownRight, DollarSign, TrendingUp, TrendingDown } from "lucide-react";

export function WeeklySummary() {
  return (
    <div className="card">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Weekly Cash Flow Summary</h2>
        <span className="status-badge-warning">Draft</span>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        {/* Total Revenue */}
        <div className="flex items-start gap-4">
          <div className="rounded-full bg-green-100 p-3">
            <DollarSign className="h-6 w-6 text-green-600" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Total Revenue</p>
            <p className="text-2xl font-bold text-gray-900">$0.00</p>
            <div className="flex items-center gap-1 text-sm text-green-600">
              <ArrowUpRight className="h-4 w-4" />
              <span>0% vs last week</span>
            </div>
          </div>
        </div>

        {/* Total Expenses */}
        <div className="flex items-start gap-4">
          <div className="rounded-full bg-red-100 p-3">
            <TrendingDown className="h-6 w-6 text-red-600" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Total Expenses</p>
            <p className="text-2xl font-bold text-gray-900">$0.00</p>
            <div className="flex items-center gap-1 text-sm text-gray-500">
              <span>0% of revenue</span>
            </div>
          </div>
        </div>

        {/* Net Cash Flow */}
        <div className="flex items-start gap-4">
          <div className="rounded-full bg-blue-100 p-3">
            <TrendingUp className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Net Cash Flow</p>
            <p className="text-2xl font-bold text-gray-900">$0.00</p>
            <div className="flex items-center gap-1 text-sm text-green-600">
              <ArrowUpRight className="h-4 w-4" />
              <span>Available for distribution</span>
            </div>
          </div>
        </div>

        {/* Owner Distribution */}
        <div className="flex items-start gap-4">
          <div className="rounded-full bg-purple-100 p-3">
            <DollarSign className="h-6 w-6 text-purple-600" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Owner Distribution</p>
            <p className="text-2xl font-bold text-gray-900">$0.00</p>
            <div className="flex items-center gap-1 text-sm text-gray-500">
              <span>Pending approval</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
