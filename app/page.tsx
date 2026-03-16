"use client";

import { useEffect, useRef } from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
  const imageRef = useRef<HTMLDivElement | null>(null);
  const nameRef = useRef<HTMLHeadingElement | null>(null);
  const textRef = useRef<HTMLParagraphElement | null>(null);
  const buttonsRef = useRef<HTMLDivElement | null>(null);

  const aboutRef = useRef<HTMLElement | null>(null);
  const projectsRef = useRef<HTMLElement | null>(null);
  const projectCardRef = useRef<HTMLDivElement | null>(null);
  const skillsRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const heroTl = gsap.timeline({
        defaults: { ease: "power4.out" },
      });

      heroTl
        .from(imageRef.current, {
          x: -120,
          opacity: 0,
          duration: 1.2,
        })
        .from(
          nameRef.current,
          {
            y: 60,
            opacity: 0,
            duration: 1,
          },
          "-=0.8"
        )
        .from(
          textRef.current,
          {
            y: 40,
            opacity: 0,
            duration: 0.9,
          },
          "-=0.6"
        )
        .from(
          buttonsRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.5"
        );

      gsap.from(aboutRef.current, {
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(projectCardRef.current, {
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top 75%",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      const skillItems = gsap.utils.toArray<HTMLElement>(".skill-item");

      gsap.fromTo(
        skillItems,
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: skillsRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.from(contactRef.current, {
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="min-h-screen bg-[#111111] text-white">
      <header className="absolute top-0 z-10 w-full">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
          <div className="text-sm font-semibold tracking-wide">
            John Michael Vincent R. Cruz
          </div>

          <nav className="hidden gap-8 text-sm text-gray-300 md:flex">
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>
            <a href="#skills" className="transition hover:text-white">
              Skills
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section className="mx-auto grid min-h-screen max-w-7xl md:grid-cols-2">
        <div
          ref={imageRef}
          className="h-[50vh] will-change-transform md:h-screen"
        >
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

          <h1
            ref={nameRef}
            className="mb-6 text-5xl font-bold leading-[0.95] md:text-7xl"
          >
            John Michael Vincent <br />
            Cruz
          </h1>

          <div className="mb-6 h-px w-32 bg-gray-600" />

          <p
            ref={textRef}
            className="mb-8 max-w-md text-base leading-7 text-gray-300"
          >
            I’m a full stack developer focused on building modern and scalable
            web applications using technologies like React, Next.js, Tailwind
            CSS, NestJS, and Python, with experience in Git-based workflows and
            clean backend architecture.
          </p>

          <div ref={buttonsRef} className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:scale-105"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white px-6 py-3 text-sm font-medium text-white transition hover:scale-105"
            >
              Hire Me
            </a>
          </div>
        </div>
      </section>

      <section ref={aboutRef} id="about" className="mx-auto max-w-7xl px-8 py-20">
        <h2 className="mb-6 text-3xl font-bold">About Me</h2>

        <p className="max-w-3xl leading-7 text-gray-300">
          I’m John Michael Vincent R. Cruz, a Full Stack Developer passionate
          about building modern web applications with clean user interfaces and
          scalable backend systems. I served as a team leader in the SLF-ODR
          project where I helped guide development efforts, improve backend
          stability, and collaborate with team members using Git-based
          workflows.
        </p>
      </section>

      <section
        ref={projectsRef}
        id="projects"
        className="mx-auto max-w-7xl px-8 py-20"
      >
        <h2 className="mb-8 text-3xl font-bold">Projects</h2>

        <div className="grid gap-6 md:grid-cols-2">
          <div
            ref={projectCardRef}
            className="rounded-2xl border border-gray-800 p-6 transition hover:-translate-y-1 hover:border-gray-600"
          >
            <p className="mb-2 text-xs text-gray-400">
              Company Project • Private Repository
            </p>

            <h3 className="mb-3 text-xl font-semibold">
              SLF-ODR Backend System
            </h3>

            <p className="mb-4 text-gray-300">
              A production-level backend system developed using NestJS and
              TypeScript. I contributed to backend bug fixes, service testing,
              debugging, and improving system stability while collaborating in a
              Git-based development environment.
            </p>

            <a href="#" className="underline hover:text-gray-300">
              Internal Project
            </a>
          </div>
        </div>
      </section>

      <section ref={skillsRef} id="skills" className="mx-auto max-w-7xl px-8 py-20">
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
              className="skill-item rounded-full border border-gray-700 px-4 py-2 text-sm transition hover:border-white"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section
        ref={contactRef}
        id="contact"
        className="mx-auto max-w-7xl px-8 py-20"
      >
        <h2 className="mb-6 text-3xl font-bold">Contact</h2>

        <div className="flex flex-col gap-4 text-gray-300">
          <a
            href="mailto:cruzjohnmichaelvincent33@gmail.com"
            className="flex items-center gap-3 transition hover:text-white"
          >
            <Mail size={20} />
            Gmail
          </a>

          <a
            href="https://github.com/VincentCruz02"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 transition hover:text-white"
          >
            <Github size={20} />
            Github
          </a>

          <a
            href="https://www.linkedin.com/in/john-michael-vincent-cruz/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 transition hover:text-white"
          >
            <Linkedin size={20} />
            Linkedin
          </a>
        </div>
      </section>
    </main>
  );
}