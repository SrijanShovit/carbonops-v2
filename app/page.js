import Hero from "@/components/homepage/Hero";
import Services from "@/components/homepage/Services";
export default function Home() {
  return (
    <div className="w-[95%] mx-auto">
      <div>
        <Hero />
      </div>
      <div>
        <Services />
      </div>
    </div>
  );
}
