/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import { Company } from "./components/Company";
import { Role } from "./components/Role";
import { Link } from "./components/Link";
import { ExperienceItem, ExperienceItems } from "./components/ExperienceItems";
import { YearsOfExperience } from "./components/YearsOfExperience";
import { SocialLink } from "./components/SocialLinkProps";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const name = "Alex King";

export const metadata = {
  title: `${name} - Web Developer`,
  description: `Resume for ${name}`,
};

export default function Home() {
  return (
    <main className="text-base flex justify-center min-h-screen text-black bg-slate-300 dark:bg-slate-950 dark:text-slate-300 print:bg-white transition-colors">
      <div className="xl:max-w-4xl max-w-2xl md:mx-24 md:p-24 p-12 print:p-0 bg-white/90 dark:bg-white/5  min-h-screen grow shadow print:shadow-none">
        <Image
          className="rounded-sm w-20 float-left mr-3 mb-3 shadow"
          src="/profile.jpg"
          alt={`Photo of ${name}`}
          width={200}
          height={269}
        />

        <h2 className="text-2xl tracking-tight">
          {name} <span className="text-sm">(she/her)</span>
        </h2>
        <div className="text-sm">
          Full stack developer with <YearsOfExperience from={2007} /> years of
          experience.{" "}
          <strong className="font-semibold">React & Typescript</strong> focus,
          with a history in{" "}
          <strong className="font-semibold">Laravel & PHP</strong>.
        </div>
        <div className="text-sm mt-2">
          🌧️ Seattle, WA – looking for fully or primarily remote
        </div>
        <section className="mt-2 clear-left">
          <h2 className="mt-3 text-lg border-b-slate-200 dark:border-b-slate-800 border-b-2 transition-[border-color]">
            About Me
          </h2>
          <p className="my-2">
            Hi! 👋 I'm a full stack developer who's passionate about building
            usable, accessible, and fast apps with web technologies. I'm looking
            for a job where I can make an impact on the project, learn new
            things, and be part of a great team.
          </p>
          <ul className="flex text-sm">
            <li className="mr-3">
              <SocialLink icon={faGithub} href="https://github.com/alexking">
                Github
              </SocialLink>
            </li>
            <li className="mr-3">
              <SocialLink
                icon={faLinkedin}
                href="https://www.linkedin.com/in/alexnking/"
              >
                LinkedIn
              </SocialLink>
            </li>
            <li className="mr-3">
              <SocialLink href="mailto:alexking@me.com" icon={faEnvelope}>
                Email
              </SocialLink>
            </li>
          </ul>
        </section>

        <section className="clear-left">
          <h2 className="mt-3 text-xl border-b-slate-200 dark:border-b-slate-800 border-b-2 transition-[border-color]">
            Job History
          </h2>
          <Company name="Vault Innovation" url="http://vaultinnovation.com">
            <Role from={2019}>Senior Web Engineer</Role>

            <ul className="ml-2 my-1">
              <ExperienceItem title="Frontend">
                Building large scale React apps using functional components and
                Typescript, using{" "}
                <Link href="https://nextjs.org/">Next.js</Link> as a base.
                Working to make fully designed, accessible, translatable, and
                mobile friendly frontend experiences for clients using modern
                CSS, <Link href="https://tailwindcss.com/">Tailwind</Link>,
                custom components and headless UX libraries. Creating custom
                hooks and components for reuse throughout apps, and using tools
                such as <Link href="https://mobx.js.org/">MobX</Link>/
                <Link href="https://mobx-state-tree.js.org/">MST</Link>,{" "}
                <Link href="https://tanstack.com/query/v3/">React Query</Link>{" "}
                and{" "}
                <Link href="https://www.react-hook-form.com/">
                  React Hook Form
                </Link>{" "}
                for state and data management.
              </ExperienceItem>

              <ExperienceItem title="Backend">
                Using <Link href="https://laravel.com/">Laravel</Link> (PHP),{" "}
                <Link href="https://nestjs.com/">Nestjs</Link> (Node), and{" "}
                <Link href="https://fastapi.tiangolo.com/">FastAPI</Link>{" "}
                (Python) frameworks to build backends and REST APIs. Using ORMs
                to build fast and efficient database (MariaDB/MySQL) queries.
                Building a Markdown based log system to help developers,
                testers, and product managers understand and debug the complex
                business logic on a project.
              </ExperienceItem>

              <ExperienceItem title="Mobile">
                Building{" "}
                <Link href="https://reactnative.dev/">React Native</Link> apps,
                deploying (via{" "}
                <Link href="https://fastlane.tools/">Fastlane</Link> and{" "}
                <Link href="https://firebase.google.com/">Firebase</Link>), and
                maintaining them on the Apple App Store and Google Play Store.
                Building a realtime chat system using websockets combined with
                native notifications.
              </ExperienceItem>
            </ul>
          </Company>
          <Company name="ModernTeacher" url="https://www.modernteacher.com/">
            <div className="text-slate-500 dark:text-slate-400 text">
              <Role from={2013} to={2015}>
                Software Engineer
              </Role>
              <Role from={2015} to={2019}>
                Senior Software Engineer
              </Role>
            </div>
            Building multiple platforms over the course of six years, including
            digital learning for students and educational platforms for teachers
            and districts. Working to architect, design, and implement products
            from the ground up.
            <ExperienceItems>
              <ExperienceItem title="Backend">
                Developing and maintaining large scale PHP (Laravel)
                applications. Using NodeJS, RabbitMQ, and Socket.io to provide
                live content updates and sync data. Planning and deploying
                server orchestration (SaltStack), scale testing (Load Impact),
                monitoring (DataDog), continuous integration (Codeship) systems
                across multiple environments. Supporting a large network of
                application edge nodes distributed in the field.
              </ExperienceItem>
              <ExperienceItem title="Frontend">
                Collaborating on design and UX, producing frontend markup and
                functionality (LESS, ES6). Setting up build systems and
                dependency control for improved developer workflows.
              </ExperienceItem>
            </ExperienceItems>
          </Company>
          <Company name="Brandmovers" url="https://www.brandmovers.com/">
            <Role from={2012} to={2013}>
              Developer
            </Role>
            <div>
              Building promotional websites for various well known companies.
              Integrating online sweepstakes with physical codes distributed on
              products.
            </div>
          </Company>
          <Company name="company52" url="https://company52.com/">
            <Role from={2010} to={2012}>
              Developer
            </Role>
            <div>
              Prototyping and building a video streaming platform with social
              networking features. Developing public facing and internal
              management systems for a commercial kitchen and distribution
              company. Building a SaaS app for software consultancies to easily
              invoice and bill clients. Building the ORM layer for an in-house
              framework.
            </div>
          </Company>
          <Company name="Rambeck Group">
            <Role from={2007} to={2010}>
              Developer
            </Role>
            <div>
              Designing and developing various PHP applications. Building
              internal systems for a health inspection agency with rule
              management, report generation, and automation. Upgrading DOS-era
              systems to a modern web application for an agricultural testing
              laboratory. Building a mapping based social network with reviews
              and messaging.
            </div>
          </Company>
        </section>
        <section className="mt-2 clear-left">
          <h2 className="mt-3 text-lg border-b-slate-200 dark:border-b-slate-800 border-b-2 transition-[border-color]">
            Hobbies
          </h2>
          <ul className="m-2">
            <li className="mb-1">
              💾 Open Source (you can see my contributions, and the source for{" "}
              <Link href="https://github.com/alexking/resume">
                the site you're reading right now
              </Link>
              , on my <Link href="https://github.com/alexking">github</Link>)
            </li>
            <li className="mb-1">
              🛠️ Making Things (very slowly working on a Voron 3D printer)
            </li>
            <li className="mb-1">
              🎛️ Eurorack (bleeps, bloops, and other tangentially musical
              sounds)
            </li>
            <li>🕹️ Games (too much Factorio and Minecraft)</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
