import { Project, PROJECTS } from './projects'
import { Card } from '../ui/card'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '../ui/drawer'
import { Button } from '../ui/button'
import { useEffect, useState } from 'react'
import { Badge } from '../ui/badge'
import { Carousel } from '../ui/carousel'
import { Link } from '@tanstack/react-router'
import { TimerIcon } from 'lucide-react'

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">My Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent work and projects.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: Project }) {
  const [direction, setDirection] = useState<'right' | 'bottom'>('right')

  useEffect(() => {
    if (window.innerWidth < 768) {
      setDirection('bottom')
    }
  }, [])

  return (
    <Card
      key={project.name}
      className="grid grid-rows-subgrid gap-2 row-span-4 overflow-hidden py-0 shadow"
    >
      <div className="relative w-full aspect-video">
        <img
          src={`/${project.images[0]}`}
          alt={project.name}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-2">
        <span className="truncate text-lg font-bold text-foreground">
          {project.name}
        </span>
      </div>
      <div className="flex flex-wrap self-start gap-2 p-2">
        {project.technologies?.map((technology) => (
          <Badge key={technology} variant="default">
            {technology}
          </Badge>
        ))}
      </div>
      <div className="p-2 grid">
        <Drawer direction={direction}>
          <DrawerTrigger asChild>
            <Button>View Details</Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle className="text-2xl">{project.name}</DrawerTitle>
              <div className="flex gap-3">
                <Badge title="Industry">{project.industry}</Badge>
                <div className="flex items-center gap-1" title="Project time">
                  <TimerIcon className="h-4 w-4" />
                  <span>{project.time}</span>
                </div>
              </div>
            </DrawerHeader>
            <div className="no-scrollbar overflow-y-auto px-4 grid gap-4 pb-10">
              <Carousel>
                {project.images.map((image) => (
                  <div key={image} className="relative w-full aspect-video">
                    <img
                      src={`/${image}`}
                      alt={image}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </Carousel>
              <div className="grid gap-3">
                <h4 className="font-bold">What is the project about?</h4>
                <div className="">{project.description}</div>
              </div>
              <div className="grid gap-3">
                <h4 className="font-bold">Used Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies?.map((technology) => (
                    <Badge key={technology} variant="default">
                      {technology}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="grid gap-3">
                <h4 className="font-bold">My Role</h4>
                <div>{project.role}</div>
              </div>
              <div className="grid gap-3">
                <h4 className="font-bold">My Responsibilities</h4>
                <ul className=" list-disc pl-4">
                  {project.responsibilities?.map((responsibility) => (
                    <li key={responsibility}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            </div>
            <DrawerFooter className="flex-row">
              {project.url && (
                <Button className="grow" variant="default" asChild>
                  <a href={project.url} target="_blank">
                    View Project
                  </a>
                </Button>
              )}
              <DrawerClose asChild>
                <Button className="grow" variant="outline">
                  Close
                </Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </Card>
  )
}
