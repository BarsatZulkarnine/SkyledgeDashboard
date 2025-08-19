"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts"

// Dummy historical data
const monthlyTrends = [
  { month: "Jan", efficiency: 72, cost: 95, maintenance: 2 },
  { month: "Feb", efficiency: 68, cost: 102, maintenance: 1 },
  { month: "Mar", efficiency: 75, cost: 88, maintenance: 3 },
  { month: "Apr", efficiency: 71, cost: 96, maintenance: 2 },
  { month: "May", efficiency: 69, cost: 104, maintenance: 4 },
  { month: "Jun", efficiency: 73, cost: 92, maintenance: 1 },
]

const weeklyBehavior = [
  { week: "Week 1", efficient: 65, inefficient: 25, aggressive: 10 },
  { week: "Week 2", efficient: 70, inefficient: 20, aggressive: 10 },
  { week: "Week 3", efficient: 68, inefficient: 22, aggressive: 10 },
  { week: "Week 4", efficient: 72, inefficient: 18, aggressive: 10 },
]

export function HistoricalTrends() {
  return (
    <div className="space-y-6">
      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Monthly Efficiency Trends</CardTitle>
            <CardDescription>Fuel efficiency percentage over the last 6 months</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyTrends}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis domain={[60, 80]} />
                  <Tooltip formatter={(value) => [`${value}%`, "Efficiency"]} />
                  <Line
                    type="monotone"
                    dataKey="efficiency"
                    stroke="#22c55e"
                    strokeWidth={3}
                    dot={{ fill: "#22c55e", strokeWidth: 2, r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Monthly Cost Analysis</CardTitle>
            <CardDescription>Fuel and maintenance costs over time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyTrends}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="cost" stroke="#ef4444" strokeWidth={2} name="Fuel Cost ($)" />
                  <Line
                    type="monotone"
                    dataKey="maintenance"
                    stroke="#f59e0b"
                    strokeWidth={2}
                    name="Maintenance Events"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Weekly Behavior Breakdown</CardTitle>
          <CardDescription>Driving behavior distribution over the last 4 weeks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyBehavior}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="efficient" stackId="a" fill="#22c55e" name="Efficient %" />
                <Bar dataKey="inefficient" stackId="a" fill="#f59e0b" name="Inefficient %" />
                <Bar dataKey="aggressive" stackId="a" fill="#ef4444" name="Aggressive %" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
