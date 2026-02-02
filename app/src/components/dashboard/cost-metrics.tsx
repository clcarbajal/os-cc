"use client";

import { PieChart } from "lucide-react";

const metrics = [
  { name: "Food Cost", value: 0, target: 30, unit: "%" },
  { name: "Labor Cost", value: 0, target: 30, unit: "%" },
  { name: "Alcohol Cost", value: 0, target: 20, unit: "%" },
  { name: "Prime Cost", value: 0, target: 65, unit: "%" },
];

export function CostMetrics() {
  return (
    <div className="card col-span-2">
      <div className="flex items-center gap-2 mb-4">
        <PieChart className="h-5 w-5 text-gray-600" />
        <h2 className="text-lg font-semibold text-gray-900">Cost Metrics</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {metrics.map((metric) => {
          const isOverTarget = metric.value > metric.target;
          return (
            <div key={metric.name} className="flex items-center justify-between py-2">
              <div>
                <span className="text-sm text-gray-600">{metric.name}</span>
                <p className="text-sm text-gray-400">Target: {metric.target}%</p>
              </div>
              <div className="text-right">
                <span
                  className={`text-lg font-bold ${
                    isOverTarget ? "text-red-600" : "text-green-600"
                  }`}
                >
                  {metric.value}
                  {metric.unit}
                </span>
                <span
                  className={`ml-2 ${
                    isOverTarget ? "status-badge-error" : "status-badge-success"
                  }`}
                >
                  {isOverTarget ? "Over" : "On Target"}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
