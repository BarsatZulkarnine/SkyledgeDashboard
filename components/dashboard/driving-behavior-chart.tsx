"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"

interface DrivingBehaviorChartProps {
  data: {
    efficient: number
    inefficient: number
    aggressive: number
  }
}

const COLORS = {
  efficient: "#22c55e",
  inefficient: "#f59e0b",
  aggressive: "#ef4444",
}

export function DrivingBehaviorChart({ data }: DrivingBehaviorChartProps) {
  const chartData = [
    { name: "Efficient", value: data.efficient, color: COLORS.efficient },
    { name: "Inefficient", value: data.inefficient, color: COLORS.inefficient },
    { name: "Aggressive", value: data.aggressive, color: COLORS.aggressive },
  ]

  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={chartData} cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={5} dataKey="value">
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => [`${value}%`, "Percentage"]} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
