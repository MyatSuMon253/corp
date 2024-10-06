import Hero from "@/components/hero";
import homeImg from "/public/home.jpg";

export default function Home() {
  return (
    <div>
      <Hero imgData={homeImg} alt="car factory" title="Buy our product" />
    </div>
  );
}
