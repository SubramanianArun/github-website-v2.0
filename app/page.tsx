import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import FloatingNavBar from "@/components/ui/FloatingNavBar";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex flex-col justify-center items-center mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNavBar navItems={navItems} />
        <Hero />
        <Grid />
        <Projects />
        <Experience />
        <Footer />
      </div>
    </main>
  );
}
