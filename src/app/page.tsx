import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Courses } from "@/components/Courses";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="flex-1 bg-background">
      <Hero />
      <About />
      <Courses />
      <Testimonials />
    </div>
  );
}