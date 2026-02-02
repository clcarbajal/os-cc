"use client";

import { Building2 } from "lucide-react";

const accounts = [
  { name: "Operating", balance: 0, type: "OPERATING" },
  { name: "Payroll", balance: 0, type: "PAYROLL" },
  { name: "Sales Tax", balance: 0, type: "SALES_TAX" },
];

export function AccountBalances() {
  return (
    <div className="card col-span-1">
      <div className="flex items-center gap-2 mb-4">
        <Building2 className="h-5 w-5 text-gray-600" />
        <h2 className="text-lg font-semibold text-gray-900">Account Balances</h2>
      </div>

      <div className="space-y-4">
        {accounts.map((account) => (
          <div key={account.type} className="flex items-center justify-between">
            <span className="text-sm text-gray-600">{account.name}</span>
            <span className="font-medium text-gray-900">
              ${account.balance.toLocaleString("en-US", { minimumFractionDigits: 2 })}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-900">Total</span>
          <span className="font-bold text-gray-900">$0.00</span>
        </div>
      </div>
    </div>
  );
}
