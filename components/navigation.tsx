"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { MoonIcon, SunIcon, MenuIcon, CarIcon } from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"
import { usePathname } from "next/navigation"

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <Button variant="outline" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === "dark" ? <SunIcon className="h-4 w-4" /> : <MoonIcon className="h-4 w-4" />}
    </Button>
  )
}

export function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/dashboard", label: "Dashboard" },
    { href: "/#team", label: "Team" },
    { href: "/#technology", label: "Technology" },
    { href: "/#future", label: "Roadmap" },
  ]

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    if (href.startsWith("/#")) return pathname === "/"
    return pathname === href
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <CarIcon className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold gradient-text">FleetGuard</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.href) ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Link href="/dashboard">
              <Button size="sm">Get Started</Button>
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <MenuIcon className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col gap-6 mt-6">
                  <Link href="/" className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                      <CarIcon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xl font-bold gradient-text">FleetGuard</span>
                  </Link>

                  <nav className="flex flex-col gap-4">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`text-sm font-medium transition-colors hover:text-primary ${
                          isActive(item.href) ? "text-primary" : "text-muted-foreground"
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>

                  <div className="pt-4 border-t">
                    <Link href="/dashboard" onClick={() => setIsOpen(false)}>
                      <Button className="w-full">Get Started</Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
