import { Mail, Github, Linkedin } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#111111] text-white">
      <header className="absolute top-0 z-10 w-full">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
          <div className="text-sm font-semibold tracking-wide">
            John Michael Vincent R. Cruz
          </div>

          <nav className="hidden gap-8 text-sm text-gray-300 md:flex">
            <a href="#about" className="hover:text-white">
              About
            </a>
            <a href="#projects" className="hover:text-white">
              Projects
            </a>
            <a href="#skills" className="hover:text-white">
              Skills
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section className="mx-auto grid min-h-screen max-w-7xl md:grid-cols-2">
        <div className="h-[50vh] md:h-screen">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="h-full w-full object-cover grayscale"
          />
        </div>

        <div className="flex flex-col justify-center px-8 py-12 md:px-16">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-400">
            Full Stack Developer
          </p>

          <h1 className="mb-6 text-5xl font-bold leading-[0.95] md:text-7xl">
            My <br />
            Portfolio
          </h1>

          <div className="mb-6 h-px w-32 bg-gray-600" />

          <p className="mb-8 max-w-md text-base leading-7 text-gray-300">
            I’m a full stack developer focused on building modern and scalable
            web applications using technologies like React, Next.js, Tailwind
            CSS, NestJS, and Python, with experience in Git-based workflows and
            clean backend architecture.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white px-6 py-3 text-sm font-medium text-white"
            >
              Hire Me
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-8 py-20">
        <h2 className="mb-6 text-3xl font-bold">About Me</h2>

        <p className="max-w-3xl text-gray-300 leading-7">
          I’m John Michael Vincent R. Cruz, a Full Stack Developer passionate
          about building modern web applications with clean user interfaces and
          scalable backend systems. I served as a team leader in the SLF-ODR
          project where I helped guide development efforts, improve backend
          stability, and collaborate with team members using Git-based
          workflows.
        </p>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-8 py-20">
        <h2 className="mb-8 text-3xl font-bold">Projects</h2>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-800 p-6 hover:border-gray-600 transition">
            <p className="text-xs text-gray-400 mb-2">
              Company Project • Private Repository
            </p>

            <h3 className="mb-3 text-xl font-semibold">
              SLF-ODR Backend System
            </h3>

            <p className="mb-4 text-gray-300">
              A production-level backend system developed using NestJS and
              TypeScript. I contributed to backend bug fixes, service testing,
              debugging, and improving system stability while collaborating in
              a Git-based development environment.
            </p>

            <a href="#" className="underline hover:text-gray-300">
              Internal Project
            </a>
          </div>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-7xl px-8 py-20">
        <h2 className="mb-8 text-3xl font-bold">Skills</h2>

        <div className="flex flex-wrap gap-3">
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Next.js",
            "Tailwind CSS",
            "NestJS",
            "Python",
            "TypeScript",
            "Git",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-gray-700 px-4 py-2 text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-8 py-20">
        <h2 className="mb-6 text-3xl font-bold">Contact</h2>

        <div className="flex flex-col gap-4 text-gray-300">
          <a
            href="mailto:your@email.com"
            className="flex items-center gap-3 hover:text-white transition duration-200"
          >
            <Mail size={20} />
            cruzjohnmichaelvincent33@gmail.com
          </a>

          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-white transition duration-200"
          >
            <Github size={20} />
            github.com/VincentCruz02
          </a>

          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-white transition duration-200"
          >
            <Linkedin size={20} />
            linkedin.com/in/john-michael-vincent-cruz
          </a>
        </div>
      </section>
    </main>
  );
}