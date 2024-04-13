"use client";

import Heading from "@/components/heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Skull } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export default function Page() {
  const achievements = useQuery(api.achievements.getAchievements);

  if (achievements === undefined) {
    return (
      <div className="h-[40rem] z-10 w-full rounded-md relative p-4  antialiased">
      <div className="flex flex-col">
        <Skeleton className="w-48 h-10" />

        <Skeleton className="h-48 w-full mt-4 " />
      </div>

      <div className="grid grid-cols-3 gap-4">
      <Skeleton className="h-64 w-full mt-4 " /><Skeleton className="h-64 w-full mt-4 " /><Skeleton className="h-64 w-full mt-4 " />
      </div>
      </div>
    );
  }

  const years = [
    //@ts-ignore
    ...new Set(
      achievements
        .filter(
          (achievement) => achievement.date && achievement.date.includes(" ")
        )
        .map((achievement) => achievement.date.split(" ")[1])
    ),
  ];

  const yearsWithExtra = [
    ...years,
    (parseInt(years[years.length - 1]) + 1).toString(),
  ];
  return (
    <div className="h-[40rem] z-10 w-full rounded-md relative p-4  antialiased">
      <div className="flex flex-col items-center justify-center">
        <Heading className="text-2xl md:text-4xl">about me</Heading>

        <p className="flex relative">
          I&apos;m a budding full-stack web developer and machine learning engineer,
          passionate about creating impactful and intuitive digital experiences.
          My enthusiasm for technology, combined with a thirst for knowledge,
          drives my constant exploration and learning in various fields. From
          understanding complex mathematical concepts to implementing them in
          algorithms and code, I find joy in the challenges that each project
          presents.
        </p>
      </div>

      <div className="hidden md:grid md:grid-cols-3 my-16 gap-4">
        <Card className="bg-transparent/15">
          <CardHeader>
            <CardTitle>education</CardTitle>
          </CardHeader>
          <CardContent>
            I&apos;m currently studying in Grade 10 at Sanskriti School, New Delhi.
            I&apos;m a hard-working student and have a keen interest in mathematics,
            physics and computer science. I&apos;ve been securing top grades in my
            class since I was 10, and I&apos;m always eager to learn new things.
          </CardContent>
        </Card>
        <Card className="bg-transparent/15">
          <CardHeader>
            <CardTitle>work experience</CardTitle>
          </CardHeader>
          <CardContent>
            I&apos;ve worked with startups like{" "}
            <Link
              className="underline-offset-4 underline"
              href="#"
            >
              Sole Savings (inactive)
            </Link>{" "}
            as a full-stack developer and data analyst, managing, maintaining
            and regularly updating their website. I&apos;ve also worked with the{" "}
            <Link
              className="underline-offset-4 underline"
              href="https://studentigf.net"
              target="_blank"
              rel="noopener noreferrer"
            >
              Student Internet Governance Forum
            </Link>{" "}
            by the government of India as a full-stack developer.
          </CardContent>
        </Card>
        <Card className="bg-transparent/15">
          <CardHeader>
            <CardTitle>achievements</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue={yearsWithExtra[0]}>
              <TabsList>
                {yearsWithExtra.map((year) => (
                  <TabsTrigger key={year} value={year}>
                    {year}
                  </TabsTrigger>
                ))}
              </TabsList>
              {yearsWithExtra.map((year) => (
                <TabsContent key={year} value={year}>
                  <ol>
                    {achievements?.filter((achievement) =>
                      achievement.date.includes(year)
                    ).length > 0 ? (
                      achievements
                        .filter((achievement) =>
                          achievement.date.includes(year)
                        )
                        .map((achievement, idx) => (
                          <li key={idx} className="my-2">
                            {idx + 1}. {achievement.achievement}
                          </li>
                        ))
                    ) : (
                      <div className="flex flex-col items-center justify-center text-muted-foreground">
                        <Skull className="w-12 h-12 animate-pulse" />
                        <p className="text-lg">haven&apos;t won anything this year... <span className="font-bold">yet</span>.</p>
                      </div>
                    )}
                  </ol>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>
      </div>
      <div className="md:hidden flex flex-col my-16 gap-4">
        <Card className="bg-transparent/15">
          <CardHeader>
            <CardTitle>education</CardTitle>
          </CardHeader>
          <CardContent>
            I&apos;m currently studying in Grade 10 at Sanskriti School, New Delhi.
            I&apos;m a hard-working student and have a keen interest in mathematics,
            physics and computer science. I&apos;ve been securing top grades in my
            class since I was 10, and I&apos;m always eager to learn new things.
          </CardContent>
        </Card>
        <Card className="bg-transparent/15">
          <CardHeader>
            <CardTitle>work experience</CardTitle>
          </CardHeader>
          <CardContent>
            I&apos;ve worked with startups like{" "}
            <Link
              className="underline-offset-4 underline"
              href="#"
            >
              Sole Savings (inactive)
            </Link>{" "}
            as a full-stack developer and data analyst, managing, maintaining
            and regularly updating their website. I&apos;ve also worked with the{" "}
            <Link
              className="underline-offset-4 underline"
              href="https://studentigf.net"
              target="_blank"
              rel="noopener noreferrer"
            >
              Student Internet Governance Forum
            </Link>{" "}
            by the government of India as a full-stack developer.
          </CardContent>
        </Card>
        <Card className="bg-transparent/15">
          <CardHeader>
            <CardTitle>achievements</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue={yearsWithExtra[0]}>
              <TabsList>
                {yearsWithExtra.map((year) => (
                  <TabsTrigger key={year} value={year}>
                    {year}
                  </TabsTrigger>
                ))}
              </TabsList>
              {yearsWithExtra.map((year) => (
                <TabsContent key={year} value={year}>
                  <ol>
                    {achievements?.filter((achievement) =>
                      achievement.date.includes(year)
                    ).length > 0 ? (
                      achievements
                        .filter((achievement) =>
                          achievement.date.includes(year)
                        )
                        .map((achievement, idx) => (
                          <li key={idx} className="my-2">
                            {idx + 1}. {achievement.achievement}
                          </li>
                        ))
                    ) : (
                      <div className="flex flex-col items-center justify-center text-muted-foreground">
                        <Skull className="w-12 h-12 animate-pulse" />
                        <p className="text-lg">haven&apos;t won anything this year... <span className="font-bold">yet</span>.</p>
                      </div>
                    )}
                  </ol>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
