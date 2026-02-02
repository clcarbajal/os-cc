"use client";

import { ArrowUpRight, ArrowDownRight } from "lucide-react";

export function RecentTransactions() {
  const transactions: Array<{
    id: string;
    description: string;
    amount: number;
    date: string;
    type: "credit" | "debit";
  }> = [];

  return (
    <div className="card">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Transactions</h2>

      {transactions.length === 0 ? (
        <p className="text-gray-500 text-center py-8">
          No transactions yet. Connect your bank accounts to see activity.
        </p>
      ) : (
        <div className="space-y-3">
          {transactions.map((tx) => (
            <div
              key={tx.id}
              className="flex items-center justify-between py-2 border-b last:border-0"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`rounded-full p-2 ${
                    tx.type === "credit" ? "bg-green-100" : "bg-red-100"
                  }`}
                >
                  {tx.type === "credit" ? (
                    <ArrowUpRight className="h-4 w-4 text-green-600" />
                  ) : (
                    <ArrowDownRight className="h-4 w-4 text-red-600" />
                  )}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{tx.description}</p>
                  <p className="text-xs text-gray-500">{tx.date}</p>
                </div>
              </div>
              <span
                className={`font-medium ${
                  tx.type === "credit" ? "text-green-600" : "text-red-600"
                }`}
              >
                {tx.type === "credit" ? "+" : "-"}$
                {Math.abs(tx.amount).toLocaleString("en-US", { minimumFractionDigits: 2 })}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
