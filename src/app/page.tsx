import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Domains } from "@/components/Domains";
import { Projects } from "@/components/Projects";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
import { Experience } from "@/components/Experience";
import { Blog } from "@/components/Blog";
import { Resume } from "@/components/Resume";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { PipelineVisual } from "@/components/PipelineVisual";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />

        <section className="py-16 px-6 border-t border-border">
          <div className="max-w-4xl mx-auto">
            <PipelineVisual />
          </div>
        </section>

        <About />
        <Domains />
        <ArchitectureDiagram />
        <Projects />
        <Experience />
        <Resume />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
