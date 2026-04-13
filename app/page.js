import About from "@/components/About";
import Cars from "@/components/Cars";
import Clients from "@/components/Client";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import Milestones from "@/components/Milestones";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div >
      <Hero/>
      <Milestones/>
      <Clients/>
      <About/>
      <Cars/>
      <Services/>
      <Testimonials/>
      <FAQ/>
    </div>
  );
}
