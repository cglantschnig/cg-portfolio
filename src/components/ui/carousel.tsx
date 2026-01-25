import * as React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from './button'

interface CarouselProps {
  children: React.ReactNode
  className?: string
  autoAdvanceMs?: number
}

export function Carousel({
  children,
  className,
  autoAdvanceMs = 5000,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const childrenArray = React.Children.toArray(children)
  const totalItems = childrenArray.length

  React.useEffect(() => {
    if (totalItems === 0) return
    setCurrentIndex((prev) => (prev > totalItems - 1 ? 0 : prev))
  }, [totalItems])

  React.useEffect(() => {
    if (totalItems <= 1) return
    if (!autoAdvanceMs || autoAdvanceMs <= 0) return

    const id = window.setInterval(() => {
      setCurrentIndex((prev) => (prev === totalItems - 1 ? 0 : prev + 1))
    }, autoAdvanceMs)

    return () => window.clearInterval(id)
  }, [autoAdvanceMs, totalItems])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalItems - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === totalItems - 1 ? 0 : prev + 1))
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  if (totalItems === 0) return null

  return (
    <div className={cn('relative w-full', className)}>
      <div className="relative overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {childrenArray.map((child, index) => (
            <div key={index} className="min-w-full shrink-0">
              {child}
            </div>
          ))}
        </div>
      </div>

      {totalItems > 1 && (
        <>
          <div className="flex items-center justify-between mt-4 gap-4">
            <div className="flex justify-center gap-2 flex-1">
              {childrenArray.map((_, index) => (
                <button
                  key={index}
                  className={cn(
                    'h-2 rounded-full transition-all duration-300',
                    index === currentIndex
                      ? 'w-8 bg-primary'
                      : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50',
                  )}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
