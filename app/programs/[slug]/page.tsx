import { notFound } from "next/navigation"
import { BookOpen, Calculator, Microscope, Globe, Code, Languages } from "lucide-react"
import { FC } from "react"

interface Program {
  title: string
  description: string
  icon: React.ElementType
}

interface ProgramPageProps {
  params: {
    slug: string
  }
}

const programData: Record<string, Program> = {
  mathematics: {
    title: "Mathematics",
    description:
      "Our Mathematics program helps students develop logical reasoning, problem-solving, and analytical thinking skills. From basic arithmetic to calculus, we emphasize conceptual understanding and confidence building.",
    icon: Calculator,
  },
  "english-literature": {
    title: "English & Literature",
    description:
      "This program strengthens communication, reading, and writing skills while inspiring a love for literature. Students explore both classic and modern works through engaging discussions and writing exercises.",
    icon: BookOpen,
  },
  "natural-science": {
    title: "Natural Science",
    description:
      "Explore the wonders of biology, chemistry, and physics through interactive lessons and experiments that build curiosity and understanding of the natural world.",
    icon: Microscope,
  },
  "social-science": {
    title: "Social Science",
    description:
      "Students learn about societies, cultures, and history — gaining awareness of how people and communities shape our world through time.",
    icon: Globe,
  },
  amharic: {
    title: "Amharic",
    description:
      "Enhance your Amharic language skills through reading, writing, and conversation practice, while exploring Ethiopian literature and culture.",
    icon: Languages,
  },
  "computer-science": {
    title: "Computer Science",
    description:
      "Learn the fundamentals of coding, problem-solving, and technology through fun and practical lessons designed for future innovators.",
    icon: Code,
  },
}

const ProgramPage: FC<ProgramPageProps> = ({ params }) => {
  const program = programData[params.slug]

  if (!program) return notFound()

  const Icon = program.icon

  return (
    <section className="min-h-screen py-24 px-6 md:px-16 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-8">
          <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center">
            <Icon className="w-10 h-10 text-primary" />
          </div>
        </div>
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">{program.title}</h1>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
          {program.description}
        </p>
        <a
          href="https://forms.gle/zc91QFWNeK1pHNPj7"
          className="inline-block px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors font-medium"
        >
          Enroll Now
        </a>
      </div>
    </section>
  )
}

export default ProgramPage
