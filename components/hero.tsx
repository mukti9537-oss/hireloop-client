import Link from "next/link"
import {
  Sparkles,
  Search,
  MapPin,
  SearchCheck,
  ChartNoAxesCombined,
  UserSearch,
  Star,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const TRENDING = ["Product Designer", "AI Engineering", "Dev-ops Engineer"]

const STATS = [
  { icon: SearchCheck, value: "50K", label: "Active Jobs" },
  { icon: ChartNoAxesCombined, value: "12K", label: "Companies" },
  { icon: UserSearch, value: "2M", label: "Job Seekers" },
  { icon: Star, value: "97%", label: "Satisfaction Rate" },
]

function StatCard({
  icon: Icon,
  value,
  label,
}: {
  icon: typeof SearchCheck
  value: string
  label: string
}) {
  return (
    <div className="flex h-auto flex-col gap-6 rounded-2xl border border-white/10 bg-gradient-to-b from-[#010103] to-[#313131] p-6 md:h-[254px] md:gap-[72px]">
      <Icon className="size-6 text-white" strokeWidth={1.5} />
      <div className="flex flex-col gap-2">
        <span className="text-5xl leading-[64px] font-semibold text-white">
          {value}
        </span>
        <span className="text-xl leading-[30px] text-white/90">{label}</span>
      </div>
    </div>
  )
}

export function Hero({ className }: { className?: string }) {
  return (
    <section className={cn("relative overflow-hidden bg-[#010103]", className)}>
      {/* Space backdrop: purple sky, dome, stars, planet — extracted from Figma */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 w-full"
        style={{
          backgroundImage: "url('/hero-bg.svg')",
          backgroundSize: "100% auto",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
          paddingBottom: "130.7%", /* 1882/1440 aspect */
        }}
      />

      <div className="relative mx-auto max-w-3xl px-4 pt-40 text-center sm:pt-52 md:pt-[172px]">
        {/* Badge */}
        <div className="flex items-center justify-center gap-5">
          <span
            aria-hidden="true"
            className="hidden h-px w-16 bg-gradient-to-r from-transparent to-white/20 sm:block"
          />
          <span className="inline-flex items-center gap-4 rounded-full bg-gradient-to-b from-[#474747] to-[#010103] p-3 text-base text-white">
            <Sparkles className="size-6 text-white" />
            50,000+ new jobs this month
          </span>
          <span
            aria-hidden="true"
            className="hidden h-px w-16 bg-gradient-to-l from-transparent to-white/20 sm:block"
          />
        </div>

        {/* Headline */}
        <h1 className="mt-8 text-4xl leading-[64px] font-semibold tracking-tight text-white sm:text-5xl">
          Find Your Dream Job Today
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white sm:text-xl sm:leading-8">
          HireLoop connects top talent with world-class companies. Browse
          thousands of curated opportunities and land your next role — faster.
        </p>

        {/* Search bar */}
        <form
          action="/"
          className="mx-auto mt-6 flex max-w-[784px] flex-col gap-2 rounded-2xl border border-white/20 bg-[#101010] p-2 md:flex-row md:items-center md:gap-0 md:rounded-2xl md:pl-6"
        >
          <label className="flex flex-1 items-center gap-2 px-3 py-3 md:px-0">
            <Search
              className="size-5 shrink-0 text-white/70"
              aria-hidden="true"
            />
            <span className="sr-only">Job title, skill or company</span>
            <input
              type="text"
              name="q"
              placeholder="Job title, skill or company"
              className="w-full bg-transparent text-base text-white placeholder:text-white/70 focus:outline-none"
            />
          </label>
          <span
            aria-hidden="true"
            className="hidden h-6 w-px bg-white/20 md:block"
          />
          <label className="flex flex-1 items-center gap-2 px-3 py-3 md:px-4">
            <MapPin
              className="size-5 shrink-0 text-white/70"
              aria-hidden="true"
            />
            <span className="sr-only">Location or Remote</span>
            <input
              type="text"
              name="location"
              placeholder="Location or Remote"
              className="w-full bg-transparent text-base text-white placeholder:text-white/70 focus:outline-none"
            />
          </label>
          <Button
            type="submit"
            aria-label="Search"
            className="size-12 shrink-0 rounded-xl border-0 bg-[#5c53fe] p-0 text-white hover:bg-[#5c53fe]/85"
          >
            <Search className="size-6" />
          </Button>
        </form>

        {/* Trending positions */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
          <span className="text-sm text-white">Trending Position</span>
          {TRENDING.map((t) => (
            <Link
              key={t}
              href={`/?q=${encodeURIComponent(t)}`}
              className="rounded-full border border-white/10 bg-[#1a1a1b] px-3 py-1.5 text-sm text-white transition-colors hover:bg-[#26262b]"
            >
              {t}
            </Link>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="relative mx-auto mt-24 max-w-[82.5rem] px-4 pb-16 sm:px-10 md:mt-[27rem] md:px-[60px] md:pb-24">
        <p className="mx-auto max-w-[600px] text-center text-xl leading-[34px] font-medium text-white/70 sm:text-2xl">
          Assisting over 15,000 job seekers find their dream positions.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}
