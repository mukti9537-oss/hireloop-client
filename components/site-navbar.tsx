"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { MenuIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const NAV_LINKS = [
  { href: "/", label: "Browse Jobs" },
  { href: "/company", label: "Company" },
  { href: "/pricing", label: "Pricing" },
]

function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("shrink-0", className)} aria-label="HireLoop home">
      <Image
        src="/logo.png"
        alt="HireLoop"
        width={154}
        height={44}
        priority
        className="h-11 w-auto"
      />
    </Link>
  )
}

function NavLinks({
  onNavigate,
  className,
}: {
  onNavigate?: () => void
  className?: string
}) {
  return (
    <nav aria-label="Main" className={className}>
      {NAV_LINKS.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={onNavigate}
          className="whitespace-nowrap text-[16px] text-[#ededf0] transition-colors hover:text-white"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  )
}

function AuthButtons({
  onNavigate,
  className,
}: {
  onNavigate?: () => void
  className?: string
}) {
  return (
    <div className={className}>
      <Button
        nativeButton={false}
        render={<Link href="/sign-in" onClick={onNavigate} />}
        className="h-10 rounded-lg border-0 bg-white px-4 text-lg font-medium text-[#645bff] hover:bg-white/90"
      >
        Sign In
      </Button>
      <Button
        nativeButton={false}
        render={<Link href="/sign-up" onClick={onNavigate} />}
        className="h-10 rounded-lg border border-black/10 bg-[#5c53fe] px-4 text-lg font-medium text-[#ededf0] hover:bg-[#5c53fe]/85"
      >
        Get Started
      </Button>
    </div>
  )
}

export function SiteNavbar({ className }: { className?: string }) {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className={cn("bg-[#08080a] px-4 pt-6 sm:px-10 md:px-20", className)}>
      <div className="mx-auto flex h-[68] max-w-[1240] items-center justify-between rounded-[14px] border border-white/[0.07] bg-[#141418] px-3 py-3">
        <Logo />

        {/* Desktop nav box */}
        <div className="hidden h-full items-center rounded-lg border border-white/[0.07] bg-[#1a1a1f] pl-6 pr-2 md:flex">
          <NavLinks className="flex items-center gap-5" />
          <span className="mx-6 h-6 w-px bg-[#a8a8a8]/40" aria-hidden="true" />
          <AuthButtons className="flex items-center gap-4" />
        </div>

        {/* Mobile hamburger */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                className="text-[#ededf0] hover:bg-white/10 hover:text-white md:hidden"
                aria-label="Open navigation menu"
              />
            }
          >
            <MenuIcon />
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[19] gap-0 rounded-none border-y-0 border-l border-white/[0.07] bg-[#1a1a1f] text-[#ededf0] sm:max-w-[19]"
          >
            <SheetHeader className="border-b border-white/[0.07] p-4">
              <SheetTitle className="sr-only">Navigation</SheetTitle>
              <Logo />
            </SheetHeader>
            <div className="p-4">
              <NavLinks onNavigate={close} className="flex flex-col items-stretch gap-1" />
            </div>
            <div className="border-t border-white/[0.07] p-4">
              <AuthButtons onNavigate={close} className="flex flex-col items-stretch gap-4" />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
