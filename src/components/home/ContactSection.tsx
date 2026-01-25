import { Button } from "../ui/button"
import { Card, CardContent } from "../ui/card"
import { Calendar } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <Calendar className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Let’s chat</h2>
          <p className="text-muted-foreground text-lg">
            Want to get to know each other or explore a project idea? Book a free consultation call and we’ll discuss goals,
            scope, and the next steps.
          </p>
        </div>

        <Card>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Pick a time that works for you—no back-and-forth emails.
              </p>
              <Button asChild size="lg" className="w-full">
                <a
                  href="https://calendly.com/christopher-glantschnig/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule a call
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

