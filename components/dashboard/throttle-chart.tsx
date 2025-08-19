"use client"

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

// Dummy data for throttle position over time
const dummyThrottleData = [
  { time: "00:00", throttle: 0 },
  { time: "00:02", throttle: 15 },
  { time: "00:04", throttle: 35 },
  { time: "00:06", throttle: 60 },
  { time: "00:08", throttle: 45 },
  { time: "00:10", throttle: 80 },
  { time: "00:12", throttle: 25 },
  { time: "00:14", throttle: 90 },
  { time: "00:16", throttle: 40 },
  { time: "00:18", throttle: 20 },
  { time: "00:20", throttle: 55 },
  { time: "00:22", throttle: 10 },
  { time: "00:24", throttle: 0 },
]

export function ThrottleChart() {
  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={dummyThrottleData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis domain={[0, 100]} />
          <Tooltip formatter={(value) => [`${value}%`, "Throttle Position"]} />
          <Area type="monotone" dataKey="throttle" stroke="#06b6d4" fill="#06b6d4" fillOpacity={0.3} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
