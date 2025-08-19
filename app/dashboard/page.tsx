"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  AlertTriangleIcon,
  TrendingUpIcon,
  TrendingDownIcon,
  DollarSignIcon,
  GaugeIcon,
  CarIcon,
  ArrowLeftIcon,
  CalendarIcon,
} from "lucide-react"
import Link from "next/link"
import { DrivingBehaviorChart } from "@/components/dashboard/driving-behavior-chart"
import { SpeedRpmChart } from "@/components/dashboard/speed-rpm-chart"
import { ThrottleChart } from "@/components/dashboard/throttle-chart"
import { HistoricalTrends } from "@/components/dashboard/historical-trends"
import { Navigation } from "@/components/navigation"

// Dummy data for dashboard
const dummyData = {
  currentBehavior: "Efficient", // Efficient, Aggressive, Inefficient
  fuelEfficiencyLoss: 12, // percentage
  yearlyExtraCost: 1250, // dollars
  maintenanceRisk: "Medium", // Low, Medium, High
  totalTrips: 156,
  avgTripDuration: 28, // minutes
  totalDistance: 2847, // km
  behaviorDistribution: {
    efficient: 68,
    inefficient: 22,
    aggressive: 10,
  },
}

function getBehaviorColor(behavior: string) {
  switch (behavior.toLowerCase()) {
    case "efficient":
      return "text-green-600 bg-green-50 border-green-200"
    case "aggressive":
      return "text-red-600 bg-red-50 border-red-200"
    case "inefficient":
      return "text-yellow-600 bg-yellow-50 border-yellow-200"
    default:
      return "text-gray-600 bg-gray-50 border-gray-200"
  }
}

function getRiskColor(risk: string) {
  switch (risk.toLowerCase()) {
    case "low":
      return "text-green-600"
    case "medium":
      return "text-yellow-600"
    case "high":
      return "text-red-600"
    default:
      return "text-gray-600"
  }
}

export default function DashboardPage() {
  const [selectedTimeRange, setSelectedTimeRange] = useState("7d")

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <Navigation />

      {/* Header */}
      <div className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeftIcon className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl font-bold">Fleet Dashboard</h1>
                <p className="text-muted-foreground">Real-time driving behavior analysis</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <CalendarIcon className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Last updated: 2 minutes ago</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Current Status Summary */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Current Behavior</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <Badge className={getBehaviorColor(dummyData.currentBehavior)}>{dummyData.currentBehavior}</Badge>
                <GaugeIcon className="w-4 h-4 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Fuel Efficiency Loss</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-red-600">{dummyData.fuelEfficiencyLoss}%</span>
                <TrendingUpIcon className="w-4 h-4 text-red-600" />
              </div>
              <Progress value={dummyData.fuelEfficiencyLoss} className="mt-2" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Yearly Extra Cost</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-red-600">${dummyData.yearlyExtraCost}</span>
                <DollarSignIcon className="w-4 h-4 text-red-600" />
              </div>
              <p className="text-xs text-muted-foreground mt-1">Based on current patterns</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Maintenance Risk</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <span className={`text-2xl font-bold ${getRiskColor(dummyData.maintenanceRisk)}`}>
                  {dummyData.maintenanceRisk}
                </span>
                <AlertTriangleIcon className={`w-4 h-4 ${getRiskColor(dummyData.maintenanceRisk)}`} />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Analytics */}
        <Tabs defaultValue="behavior" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="behavior">Behavior Analysis</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="trends">Historical Trends</TabsTrigger>
            <TabsTrigger value="insights">Insights</TabsTrigger>
          </TabsList>

          <TabsContent value="behavior" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Driving Style Distribution</CardTitle>
                  <CardDescription>Breakdown of driving behaviors over the last 30 days</CardDescription>
                </CardHeader>
                <CardContent>
                  <DrivingBehaviorChart data={dummyData.behaviorDistribution} />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Trip Statistics</CardTitle>
                  <CardDescription>Overview of recent driving activity</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Total Trips</span>
                    <span className="font-semibold">{dummyData.totalTrips}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Avg Trip Duration</span>
                    <span className="font-semibold">{dummyData.avgTripDuration} min</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Total Distance</span>
                    <span className="font-semibold">{dummyData.totalDistance} km</span>
                  </div>
                  <div className="pt-4 border-t">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Efficient Driving</span>
                        <span>{dummyData.behaviorDistribution.efficient}%</span>
                      </div>
                      <Progress value={dummyData.behaviorDistribution.efficient} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="performance" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Speed vs RPM Analysis</CardTitle>
                  <CardDescription>Real-time correlation between speed and engine RPM</CardDescription>
                </CardHeader>
                <CardContent>
                  <SpeedRpmChart />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Throttle Position Over Time</CardTitle>
                  <CardDescription>Throttle usage patterns during recent trips</CardDescription>
                </CardHeader>
                <CardContent>
                  <ThrottleChart />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="trends" className="space-y-6">
            <HistoricalTrends />
          </TabsContent>

          <TabsContent value="insights" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recommendations</CardTitle>
                  <CardDescription>AI-powered suggestions to improve efficiency</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
                    <TrendingDownIcon className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-green-800">Reduce Aggressive Acceleration</p>
                      <p className="text-sm text-green-700">Could save up to $400/year in fuel costs</p>
                    </div>
                  </div>
                  <div className="flex gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <GaugeIcon className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-blue-800">Optimize RPM Range</p>
                      <p className="text-sm text-blue-700">Maintain 1500-2500 RPM for better efficiency</p>
                    </div>
                  </div>
                  <div className="flex gap-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                    <CarIcon className="w-5 h-5 text-yellow-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-yellow-800">Schedule Maintenance</p>
                      <p className="text-sm text-yellow-700">Engine performance shows signs of wear</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Cost Impact Analysis</CardTitle>
                  <CardDescription>Financial implications of current driving patterns</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Current Monthly Cost</span>
                      <span className="font-semibold text-red-600">$104</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Optimized Monthly Cost</span>
                      <span className="font-semibold text-green-600">$78</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t">
                      <span className="font-medium">Potential Monthly Savings</span>
                      <span className="font-bold text-green-600">$26</span>
                    </div>
                  </div>
                  <div className="pt-4">
                    <p className="text-sm text-muted-foreground">
                      By improving driving efficiency, you could save approximately $312 per year in fuel and
                      maintenance costs.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
