import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  image: string
}

export default function ProjectCard({ title, description, technologies, image }: ProjectCardProps) {
  return (
    <div className="bg-zinc-800/50 rounded-lg overflow-hidden border border-zinc-700 group hover:border-emerald-400/50 transition-all duration-500 hover:-translate-y-2">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
          <div className="p-4 w-full">
            <div className="flex space-x-3 justify-end">
              <Button
                variant="outline"
                size="sm"
                className="border-zinc-600 bg-zinc-900/80 hover:border-emerald-400 hover:text-emerald-400"
              >
                <Github className="w-4 h-4 mr-2" />
                Code
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-zinc-600 bg-zinc-900/80 hover:border-emerald-400 hover:text-emerald-400"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-emerald-400 transition-colors">{title}</h3>
        <p className="text-zinc-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 bg-zinc-700 rounded-full text-zinc-300 hover:bg-emerald-500 hover:text-white transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
