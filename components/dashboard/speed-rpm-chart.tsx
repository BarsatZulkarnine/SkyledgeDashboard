"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"

// Dummy data for speed vs RPM correlation
const dummySpeedRpmData = [
  { time: "00:00", speed: 0, rpm: 800 },
  { time: "00:05", speed: 25, rpm: 1200 },
  { time: "00:10", speed: 45, rpm: 1800 },
  { time: "00:15", speed: 60, rpm: 2200 },
  { time: "00:20", speed: 55, rpm: 2000 },
  { time: "00:25", speed: 70, rpm: 2500 },
  { time: "00:30", speed: 40, rpm: 1600 },
  { time: "00:35", speed: 80, rpm: 2800 },
  { time: "00:40", speed: 65, rpm: 2300 },
  { time: "00:45", speed: 30, rpm: 1400 },
  { time: "00:50", speed: 50, rpm: 1900 },
  { time: "00:55", speed: 0, rpm: 800 },
]

export function SpeedRpmChart() {
  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={dummySpeedRpmData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip />
          <Legend />
          <Line yAxisId="left" type="monotone" dataKey="speed" stroke="#0066cc" strokeWidth={2} name="Speed (km/h)" />
          <Line yAxisId="right" type="monotone" dataKey="rpm" stroke="#10b981" strokeWidth={2} name="RPM" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
