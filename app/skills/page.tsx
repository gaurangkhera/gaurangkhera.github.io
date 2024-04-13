import { SiTensorflow, SiFlask, SiNextdotjs, SiTailwindcss, SiHtml5, SiOpenai, SiTypescript, SiReact,  SiJavascript, SiCpanel, SiGithubactions, SiGnubash, SiCsharp, SiMongodb, SiPrisma } from "react-icons/si";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
import { Card, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function Page() {
    const skills = [
        {name: 'Tensorflow', icon: <SiTensorflow className="text-muted-foreground w-12 h-12"/>, progress:89},
        {name: 'Flask', icon: <SiFlask className="text-muted-foreground w-12 h-12"/>, progress:99.9},
        {name: 'Next.js', icon: <SiNextdotjs className="text-muted-foreground w-12 h-12"/>, progress:95},
        {name: 'Tailwind CSS', icon: <SiTailwindcss className="text-muted-foreground w-12 h-12"/>, progress:98},
        {name: 'HTML5', icon: <SiHtml5 className="text-muted-foreground w-12 h-12"/>, progress:100},
        {name: 'OpenAI', icon: <SiOpenai className="text-muted-foreground w-12 h-12"/>, progress:94},
        {name: 'TypeScript', icon: <SiTypescript className="text-muted-foreground w-12 h-12"/>, progress:92},
        {name: 'React', icon: <SiReact className="text-muted-foreground w-12 h-12"/>, progress:93},
        {name: 'JavaScript', icon: <SiJavascript className="text-muted-foreground w-12 h-12"/>, progress:97},
        {name: 'cPanel', icon: <SiCpanel className="text-muted-foreground w-12 h-12"/>, progress:93},
        {name: 'GitHub Actions', icon: <SiGithubactions className="text-muted-foreground w-12 h-12"/>, progress:89},
        {name: 'GNU Bash', icon: <SiGnubash className="text-muted-foreground w-12 h-12"/>, progress:99},
        {name: 'C#', icon: <SiCsharp className="text-muted-foreground w-12 h-12"/>, progress:74},
        {name: 'Mongo DB', icon: <SiMongodb className="text-muted-foreground w-12 h-12"/>, progress:98},
        {name: 'Prisma', icon: <SiPrisma className="text-muted-foreground w-12 h-12"/>, progress:99},
    ];

    return (
        <div className="h-screen relative z-10 p-4 gap-4">
            <div className="mt-20 md:grid md:grid-cols-3 flex flex-col">
            {skills.map((skill, index) => (
                <div key={index} className="flex flex-col items-center justify-center p-4">
                    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
        {skill.icon}
        </TooltipTrigger>
        <TooltipContent className="w-[250px] z-[99999] flex items-center justify-center flex-col">
            {skill.name}
            <Progress value={skill.progress} />
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
                </div>
            ))}
            </div>
            <div className="text-center flex items-center justify-center bottom-0 mt-20">
                <p className="text-muted-foreground">Tip: Hover over the technologies to learn more.</p>
            </div>
        </div>
    )
}