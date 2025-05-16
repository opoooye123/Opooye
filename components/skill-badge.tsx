import { SiHtml5, SiCss3, SiJavascript, SiReact, SiMongodb, SiTailwindcss, SiGit } from "react-icons/si"
import { LuLayoutTemplate, LuPaintbrush, LuServer } from "react-icons/lu"

interface SkillBadgeProps {
  name: string
  icon: string
}

export default function SkillBadge({ name, icon }: SkillBadgeProps) {
  const getIcon = () => {
    switch (icon.toLowerCase()) {
      case "html":
        return <SiHtml5 className="w-8 h-8 text-orange-500" />
      case "css":
        return <SiCss3 className="w-8 h-8 text-blue-500" />
      case "javascript":
        return <SiJavascript className="w-8 h-8 text-yellow-400" />
      case "react":
        return <SiReact className="w-8 h-8 text-cyan-400" />
      case "mongodb":
        return <SiMongodb className="w-8 h-8 text-green-500" />
      case "tailwind":
        return <SiTailwindcss className="w-8 h-8 text-cyan-400" />
      case "git":
        return <SiGit className="w-8 h-8 text-orange-600" />
      case "responsive":
        return <LuLayoutTemplate className="w-8 h-8 text-purple-400" />
      case "uiux":
        return <LuPaintbrush className="w-8 h-8 text-pink-400" />
      case "api":
        return <LuServer className="w-8 h-8 text-emerald-400" />
      default:
        return <div className="w-8 h-8 bg-emerald-400 rounded-full" />
    }
  }

  return (
    <div className="bg-zinc-800/50 p-6 rounded-lg border border-zinc-700 flex flex-col items-center justify-center hover:border-emerald-400/50 transition-all duration-300 group hover:-translate-y-2 hover:shadow-lg hover:shadow-emerald-500/10">
      <div className="mb-3 transform transition-transform group-hover:scale-110 duration-300">{getIcon()}</div>
      <p className="text-center group-hover:text-emerald-400 transition-colors">{name}</p>
    </div>
  )
}
