import { ProjectsSection } from "./ProjectsSection"
import { HeroSection } from "./HeroSection"
import { ContactSection } from "./ContactSection"

export function Home() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />

      <ProjectsSection />

      <ContactSection />

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} Christopher Glantschnig. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
