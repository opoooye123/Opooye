import Image from "next/image"
import { Github, Mail, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import SkillBadge from "@/components/skill-badge"
import ContactForm from "@/components/contact-form"
import AnimatedText from "@/components/animated-text"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-900 to-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-900/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">
            <span className="text-emerald-400">Opooye</span>Olamilekan
          </h1>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-zinc-300 hover:text-emerald-400 transition-colors relative group"
                  >
                    {item}
                    <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-emerald-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <Button
            variant="outline"
            className="hidden md:flex border-emerald-400 text-emerald-400 hover:bg-emerald-400/10"
          >
            Resume
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <span className="sr-only">Open menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right" data-aos-duration="1000">
            <p className="text-emerald-400 font-medium mb-4">Hi, my name is</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <AnimatedText text="Opooye Olamilekan" />
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold text-zinc-400 mb-6">I build things for the web.</h2>
            <p className="text-zinc-400 mb-8 max-w-md">
              I'm a frontend developer specializing in building exceptional digital experiences. Currently, I'm focused
              on creating accessible, human-centered products.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-emerald-500 hover:bg-emerald-600 transition-transform hover:scale-105">
                View My Work
              </Button>
              <Button
                variant="outline"
                className="border-emerald-400 text-emerald-400 hover:bg-emerald-400/10 transition-transform hover:scale-105"
              >
                Contact Me
              </Button>
            </div>
          </div>
          <div className="flex justify-center" data-aos="fade-left" data-aos-duration="1000">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-emerald-400/20 animate-pulse-slow">
              <Image
                src="https://pbs.twimg.com/profile_images/1921136794310967296/cHNWKfbo_400x400.jpg"
                alt="Opooye Olamilekan profile"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-zinc-800/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center" data-aos="fade-up">
            <span className="text-emerald-400">About</span> Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right" data-aos-delay="100">
              <p className="text-zinc-300 mb-4">
                Hello! I'm a passionate frontend developer with a strong foundation in creating responsive,
                user-friendly web applications. My journey in web development started with HTML, CSS, and JavaScript,
                and has evolved to include modern frameworks like React.
              </p>
              <p className="text-zinc-300 mb-4">
                I enjoy turning complex problems into simple, beautiful, and intuitive designs. When I'm not coding,
                you'll find me exploring new technologies, contributing to open-source projects, or sharing my knowledge
                with the developer community.
              </p>
              <p className="text-zinc-300">
                I'm always looking for new challenges and opportunities to grow as a developer.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4" data-aos="fade-left" data-aos-delay="200">
              <div className="bg-zinc-800 p-6 rounded-lg transform transition-transform hover:scale-105 hover:bg-zinc-700">
                <h3 className="text-xl font-bold mb-2 text-emerald-400">2+</h3>
                <p className="text-zinc-400">Years of Experience</p>
              </div>
              <div className="bg-zinc-800 p-6 rounded-lg transform transition-transform hover:scale-105 hover:bg-zinc-700">
                <h3 className="text-xl font-bold mb-2 text-emerald-400">15+</h3>
                <p className="text-zinc-400">Projects Completed</p>
              </div>
              <div className="bg-zinc-800 p-6 rounded-lg transform transition-transform hover:scale-105 hover:bg-zinc-700">
                <h3 className="text-xl font-bold mb-2 text-emerald-400">5+</h3>
                <p className="text-zinc-400">Happy Clients</p>
              </div>
              <div className="bg-zinc-800 p-6 rounded-lg transform transition-transform hover:scale-105 hover:bg-zinc-700">
                <h3 className="text-xl font-bold mb-2 text-emerald-400">100%</h3>
                <p className="text-zinc-400">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center" data-aos="fade-up">
            My <span className="text-emerald-400">Skills</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div data-aos="zoom-in" data-aos-delay="100">
              <SkillBadge name="HTML" icon="html" />
            </div>
            <div data-aos="zoom-in" data-aos-delay="150">
              <SkillBadge name="CSS" icon="css" />
            </div>
            <div data-aos="zoom-in" data-aos-delay="200">
              <SkillBadge name="JavaScript" icon="javascript" />
            </div>
            <div data-aos="zoom-in" data-aos-delay="250">
              <SkillBadge name="React" icon="react" />
            </div>
            <div data-aos="zoom-in" data-aos-delay="300">
              <SkillBadge name="MongoDB" icon="mongodb" />
            </div>
            <div data-aos="zoom-in" data-aos-delay="350">
              <SkillBadge name="Tailwind CSS" icon="tailwind" />
            </div>
            <div data-aos="zoom-in" data-aos-delay="400">
              <SkillBadge name="Git" icon="git" />
            </div>
            <div data-aos="zoom-in" data-aos-delay="450">
              <SkillBadge name="Responsive Design" icon="responsive" />
            </div>
            <div data-aos="zoom-in" data-aos-delay="500">
              <SkillBadge name="UI/UX" icon="uiux" />
            </div>
            <div data-aos="zoom-in" data-aos-delay="550">
              <SkillBadge name="RESTful APIs" icon="api" />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-zinc-800/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center" data-aos="fade-up">
            Featured <span className="text-emerald-400">Projects</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div data-aos="fade-up" data-aos-delay="400">
              <ProjectCard
                title="Decentral-Fund"
                description="A decentralized funding platform designed to connect projects with global backers through transparent, blockchain-powered smart contracts. Built for trust, accessibility, and community-driven impact"
                technologies={["JavaScript", "Blockchain",]}
                image="https://pbs.twimg.com/media/GkgYp1_WsAAObjA?format=jpg&name=large"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center" data-aos="fade-up">
            Client <span className="text-emerald-400">Testimonials</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1].map((i) => (
              <div
                key={i}
                className="bg-zinc-800/50 p-6 rounded-lg border border-zinc-700 transform transition-all duration-300 hover:border-emerald-400 hover:-translate-y-2"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-700 mr-4"></div>
                  <div>
                    <h3 className="font-semibold">Sisco Ask</h3>
                    <p className="text-zinc-400 text-sm">Cloud Engineer</p>
                  </div>
                </div>
                <p className="text-zinc-300">
                  "Working with Olamilekan was an absolute pleasure. He delivered the project on time, with excellent
                  quality, and was very responsive to feedback and changes."
                </p>
                <div className="flex text-yellow-400 mt-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-zinc-800/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center" data-aos="fade-up">
            Get In <span className="text-emerald-400">Touch</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div data-aos="fade-right" data-aos-delay="100">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <p className="text-zinc-300 mb-6">
                I'm interested in freelance opportunities – especially ambitious or large projects. However, if you have
                other requests or questions, don't hesitate to contact me.
              </p>
              <div className="space-y-4">
                <div className="flex items-center group">
                  <Mail className="w-5 h-5 text-emerald-400 mr-3 group-hover:scale-110 transition-transform" />
                  <span className="group-hover:text-emerald-400 transition-colors">amnotpissed@gmail.com</span>
                </div>
                <div className="flex items-center group">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-emerald-400 mr-3 group-hover:scale-110 transition-transform"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                  <span className="group-hover:text-emerald-400 transition-colors">Lagos, Nigeria</span>
                </div>
              </div>
              <div className="flex space-x-4 mt-8">
                <a
                  href="https://github.com/opoooye123"
                  className="w-10 h-10 rounded-full bg-zinc-700 flex items-center justify-center hover:bg-emerald-500 transition-all duration-300 hover:scale-110"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/opooye-olamilekan-28522a2b6/"
                  className="w-10 h-10 rounded-full bg-zinc-700 flex items-center justify-center hover:bg-emerald-500 transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/2348052455193"
                  className="w-10 h-10 rounded-full bg-zinc-700 flex items-center justify-center hover:bg-emerald-500 transition-all duration-300 hover:scale-110"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div data-aos="fade-left" data-aos-delay="200">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-zinc-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-zinc-400">© {new Date().getFullYear()} Opooye Olamilekan. All rights reserved.</p>
          <p className="text-zinc-500 text-sm mt-2">Designed & Built with ❤️</p>
        </div>
      </footer>
    </main>
  )
}
