import { Button } from '../ui/button'
import { DownloadIcon, Github, Linkedin, Mail, MapPin } from 'lucide-react'
import Squares from '../Squares'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-primary px-4 py-20 text-primary-foreground sm:px-6 lg:px-8">
      <div className="absolute inset-0">
        <Squares
          direction="diagonal"
          speed={0.35}
          squareSize={48}
          borderColor="rgba(248, 250, 252, 0.14)"
          hoverFillColor="rgba(248, 250, 252, 0.08)"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_34%),linear-gradient(180deg,rgba(12,10,18,0.08)_0%,rgba(12,10,18,0.48)_100%)]" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Picture */}
          <div className="shrink-0">
            <div className="relative">
              <div className="h-64 w-64 overflow-hidden rounded-full border border-white/15 bg-linear-to-br from-zinc-900 to-zinc-950 shadow-2xl shadow-black/30">
                <img
                  src="/profile.webp"
                  alt="Christopher Glantschnig"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to initials if image doesn't exist
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                    target.parentElement!.innerHTML = `
                      <div class="w-full h-full flex items-center justify-center bg-primary/10">
                        <span class="text-6xl font-bold text-primary/50">CG</span>
                      </div>
                    `
                  }}
                />
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="mb-4 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Christopher Glantschnig
            </h1>
            <p className="mb-6 text-xl text-zinc-200 sm:text-2xl">
              Senior Full Stack Software Developer
            </p>
            <div className="flex flex-col justify-center lg:justify-start sm:flex-row items-center lg:items-start gap-4 mb-8">
              <div className="flex items-center gap-2 text-zinc-200">
                <MapPin className="h-5 w-5" />
                <span>Vienna, Austria</span>
              </div>
              <div className="flex items-center gap-2 text-green-400">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-medium">Available for hire</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button
                asChild
                variant="secondary"
                size="lg"
                className="shadow-lg shadow-primary/20"
              >
                <a href="#projects">View My Work</a>
              </Button>
              <Button
                asChild
                variant="secondary"
                size="lg"
                className="shadow-lg shadow-primary/20"
              >
                <a href="/public/Christopher_Glantschnig.pdf" download>
                  <DownloadIcon className="h-5 w-5" /> Resume
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <a href="#contact">Schedule a Meeting</a>
              </Button>
            </div>
            <div className="flex gap-4 mt-6 justify-center lg:justify-start">
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="text-zinc-200 hover:text-zinc-50 hover:bg-zinc-900"
              >
                <a
                  href="https://github.com/cglantschnig"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="text-zinc-200 hover:text-zinc-50 hover:bg-zinc-900"
              >
                <a
                  href="https://www.linkedin.com/in/christopher-glantschnig/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="text-zinc-200 hover:text-zinc-50 hover:bg-zinc-900"
              >
                <a
                  href="mailto:christopher.glantschnig@gmail.com"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
