"use client";

import { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";
import Heading from "@/components/heading";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

interface Project {
  id: number;
  name: string;
  description: string;
  clone_url: string;
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/gaurangkhera/repos")
      .then((response) => response.json())
      .then((data) => {
        //@ts-ignore
        const filteredProjects = data.filter((project) => {
          const excludedProjects = [
            "airbnb-clone-nextjs",
            "gaurangkhera.github.io",
            "Flask-todo-list",
            "movies.search",
          ];
          return (
            project.description &&
            project.description.trim() !== "" &&
            !excludedProjects.includes(project.name)
          );
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
        setIsLoading(false);
      });
  }, []);
  return (
    <div className="flex flex-col items-center justify-center p-4 mb-4">
      <Heading className="text-2xl md:text-4xl mb-8">projects</Heading>
      <div className="md:grid md:grid-cols-3 gap-4 flex items-center justify-center flex-col">
        {!isLoading &&
          projects.map((project) => (
            <Card
              key={project.id}
              className="max-w-[400px] bg-transparent/15 z-[99999]"
            >
              <CardHeader className="gap-3">
                <div className="flex flex-col">
                  {project.name !== "Concise.ai" &&
                  project.name !== "prompt.app" ? (
                    <p className="font-semibold text-md clash capitalize">
                      {project.name.replace("-", " ")}
                    </p>
                  ) : (
                    <p className="font-semibold text-md clash">
                      {project.name.replace("-", " ")}
                    </p>
                  )}
                </div>
              </CardHeader>
              {project.description ? (
                <CardContent>
                  <p className="truncate">{project.description}</p>
                </CardContent>
              ) : null}
              <CardFooter>
                <Link
                  href={project.clone_url}
                  className={buttonVariants({
                    variant: "outline",
                  })}
                >
                  Source
                </Link>
              </CardFooter>
            </Card>
          ))}
        {isLoading && (
          <div className="md:grid md:grid-cols-3 gap-4 items-center justify-center ">
            <Skeleton className="w-full h-64" />
            <Skeleton className="w-full h-64" />
            <Skeleton className="w-full h-64" />
            <Skeleton className="w-full h-64" />
            <Skeleton className="w-full h-64" />
            <Skeleton className="w-full h-64" />
          </div>
        )}
      </div>
    </div>
  );
}
