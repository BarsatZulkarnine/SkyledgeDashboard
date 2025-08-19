"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CarIcon,
  GaugeIcon,
  TrendingUpIcon,
  ShieldCheckIcon,
  BrainIcon,
  CpuIcon,
  DatabaseIcon,
  CodeIcon,
  WifiIcon,
} from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"

function AnimatedGauge() {
  const [rpm, setRpm] = useState(0)
  const [speed, setSpeed] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRpm(Math.sin(Date.now() / 1000) * 1000 + 2000)
      setSpeed(Math.sin(Date.now() / 1500) * 30 + 50)
    }, 100)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-64 h-64 mx-auto">
      <div className="absolute inset-0 rounded-full border-8 border-muted">
        <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">{Math.round(speed)}</div>
            <div className="text-sm text-muted-foreground">km/h</div>
            <div className="text-lg font-semibold text-secondary mt-2">{Math.round(rpm)}</div>
            <div className="text-xs text-muted-foreground">RPM</div>
          </div>
        </div>
      </div>
      <GaugeIcon className="absolute top-4 right-4 w-6 h-6 text-primary animate-pulse" />
    </div>
  )
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Added navigation header */}
      <Navigation />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-5"></div>
        <div className="container mx-auto px-4 py-20 relative">
          <div className="text-center max-w-4xl mx-auto">
            {/* Company & University Logos */}
            <div className="flex justify-center items-center gap-8 mb-8">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">SL</span>
                </div>
                <span className="text-lg font-semibold">Sky Ledge</span>
              </div>
              <div className="w-px h-8 bg-border"></div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">UNI</span>
                </div>
                <span className="text-lg font-semibold">University</span>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">FleetGuard</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Predictive Maintenance for Fleet Management
            </p>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              AI-powered driving behavior analysis using OBD II data and Raspberry Pi technology. Detect inefficient
              driving patterns with 80% accuracy and reduce fleet maintenance costs.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <ShieldCheckIcon className="w-4 h-4 mr-2" />
                80% Accuracy
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm">
                <TrendingUpIcon className="w-4 h-4 mr-2" />
                Cost Reduction
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm">
                <CarIcon className="w-4 h-4 mr-2" />
                Real-time Analysis
              </Badge>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link href="/dashboard">
                <Button size="lg" className="px-8 py-3">
                  View Dashboard
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="px-8 py-3 bg-transparent">
                Learn More
              </Button>
            </div>

            {/* Animated Gauge Visualization */}
            <AnimatedGauge />
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Intelligent Fleet Management</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our system analyzes driving patterns in real-time to provide actionable insights for fleet optimization
              and predictive maintenance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GaugeIcon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Real-time Monitoring</h3>
                <p className="text-muted-foreground">
                  Continuous analysis of OBD II data including speed, RPM, throttle position, and more.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUpIcon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Predictive Analytics</h3>
                <p className="text-muted-foreground">
                  Machine learning algorithms predict maintenance needs and fuel efficiency losses.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShieldCheckIcon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Cost Optimization</h3>
                <p className="text-muted-foreground">
                  Reduce fuel costs and maintenance expenses through intelligent driving behavior insights.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Added id anchors for navigation */}
      <section id="technology" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technology Stack</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built with cutting-edge technologies to deliver reliable, scalable, and intelligent fleet management
              solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CodeIcon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Python</h3>
                <p className="text-sm text-muted-foreground">
                  Core backend development and machine learning implementation
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DatabaseIcon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">FastAPI</h3>
                <p className="text-sm text-muted-foreground">
                  High-performance API framework for real-time data processing
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CpuIcon className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Raspberry Pi</h3>
                <p className="text-sm text-muted-foreground">
                  Edge computing device for OBD II data collection and processing
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BrainIcon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Machine Learning</h3>
                <p className="text-sm text-muted-foreground">
                  Unsupervised learning algorithms for behavior pattern detection
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <WifiIcon className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">LLM Integration</h3>
                <p className="text-sm text-muted-foreground">
                  AI-powered insights and natural language recommendations
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="future" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Future Development</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our roadmap for expanding FleetGuard's capabilities and reaching production readiness.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">Q1</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Backend API Development</h3>
                  <p className="text-muted-foreground mb-3">
                    Complete FastAPI backend with real-time data processing, user authentication, and fleet management
                    endpoints.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">FastAPI</Badge>
                    <Badge variant="outline">Authentication</Badge>
                    <Badge variant="outline">Real-time Processing</Badge>
                  </div>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">Q2</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Mobile Application</h3>
                  <p className="text-muted-foreground mb-3">
                    Native mobile app for drivers with real-time feedback, trip summaries, and efficiency coaching.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">React Native</Badge>
                    <Badge variant="outline">Push Notifications</Badge>
                    <Badge variant="outline">Offline Support</Badge>
                  </div>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">Q3</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Advanced Analytics & AI</h3>
                  <p className="text-muted-foreground mb-3">
                    Enhanced machine learning models, predictive maintenance alerts, and intelligent route optimization.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Deep Learning</Badge>
                    <Badge variant="outline">Predictive Models</Badge>
                    <Badge variant="outline">Route Optimization</Badge>
                  </div>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">Q4</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Production Deployment</h3>
                  <p className="text-muted-foreground mb-3">
                    Full production release with enterprise features, multi-tenant support, and comprehensive fleet
                    management tools.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Enterprise Ready</Badge>
                    <Badge variant="outline">Multi-tenant</Badge>
                    <Badge variant="outline">Scalable Infrastructure</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
