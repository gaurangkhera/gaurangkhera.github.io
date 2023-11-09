"use client";

import { useEffect, useState } from 'react';
import { subtitle, title } from "@/components/primitives";
import { Card, CardBody, CardHeader, Divider, Link, Image, CardFooter } from '@nextui-org/react';
import { Github, GithubIcon } from 'lucide-react';

interface Project {
    id: number;
    name: string;
    description: string;
    clone_url: string;
}

export default function ProjectsPage() {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/users/gaurangkhera5188/repos')
            .then(response => response.json())
            .then(data => {
                //@ts-ignore
                const filteredProjects = data.filter(project => {
                    const keywords = ["Stratify", "ProjectCrypt", "Astral", "Quill", "Quilljet"];
                    return keywords.some(keyword => project.name.includes(keyword));
                });
                setProjects(filteredProjects);
            });
    }, []);
    return (
        <div>
            <h1 className={title()}>My projects</h1>
            <p className={subtitle()}>I&apos;ve built a variety of projects over the years. From building simple ecommerce platforms, to complex SaaS apps.</p>
            <div className='grid grid-cols-3 gap-4 mt-16'>
                {projects.map(project => (
                    <Card key={project.id} className="max-w-[400px]">
                        <CardHeader className="gap-3">
                            <div className="flex flex-col">
                                <p className="font-semibold text-md">{project.name}</p>
                            </div>
                        </CardHeader>
                        <Divider/>
                        { project.description ? (
                            <CardBody>
                            <p className='truncate'>{project.description}</p>
                        </CardBody>
                        ) : null}
                        <Divider/>
                        <CardFooter>
                            <Link
                                showAnchorIcon
                                href={project.clone_url}
                            >
                                GitHub
                            </Link>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}