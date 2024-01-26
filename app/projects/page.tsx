"use client";

import { useEffect, useState } from 'react';
import { subtitle, title } from "@/components/primitives";
import { Card, CardBody, CardHeader, Divider, Link, Image, CardFooter } from '@nextui-org/react';
import { Github, GithubIcon } from 'lucide-react';
import clsx from 'clsx';

interface Project {
    id: number;
    name: string;
    description: string;
    clone_url: string;
}

export default function ProjectsPage() {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/users/gaurangkhera/repos')
            .then(response => response.json())
            .then(data => {
                //@ts-ignore
                const filteredProjects = data.filter(project => {
                    const excludedProjects = ['airbnb-clone-nextjs', 'gaurangkhera.github.io', 'Flask-todo-list', 'movies.search'];
                    return project.description && project.description.trim() !== '' && !excludedProjects.includes(project.name);
                });

                // Sort the projects by name in title case
                filteredProjects.sort((a: any, b: any) => {
                    const nameA = a.name.replace(/[^a-zA-Z0-9 ]/g, " ").toLowerCase();
                    const nameB = b.name.replace(/[^a-zA-Z0-9 ]/g, " ").toLowerCase();
                    if (nameA < nameB) return -1;
                    if (nameA > nameB) return 1;
                    return 0;
                });

                setProjects(filteredProjects);
            });
    }, []);
    return (
        <div className='my-4'>
            <h1 className={clsx(title(), 'clash')}>My projects</h1>
            <p className={subtitle()}>I&apos;ve built a variety of projects over the years. From simple ecommerce platforms, to complex SaaS apps, I&apos;ve built them all. You can check out a few of my projects here.</p>
            <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-4 mt-16'>
                {projects.map(project => (
                    <Card key={project.id} className="max-w-[400px]">
                        <CardHeader className="gap-3">
                            <div className="flex flex-col">
                                {project.name !== 'Concise.ai' && project.name !== 'prompt.app' ? (
                                    <p className="font-semibold text-md clash capitalize">{project.name.replace("-", " ")}</p>
                                ) : (
                                    <p className="font-semibold text-md clash">{project.name.replace("-", " ")}</p>
                                )}
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