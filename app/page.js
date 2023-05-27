import Hero from "@/components/homepage/Hero";
import Services from "@/components/homepage/Services";
import Graph from "@/components/homepage/Graph";
import Organizations from "@/components/homepage/Organizations";
export default function Home() {
  return (
    <div className="w-[95%] mx-auto">
      <div>
        <Hero />
      </div>
      <div>
        <Services />
      </div>
      <div>
        <Graph />
      </div>
      <div>
        <Organizations />
      </div>
    </div>
  );
}
