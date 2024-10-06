import Hero from "@/components/hero";
import scaleImg from "/public/scale.jpg";

export default function ScalePage() {
  return (
    <div>
      <Hero
        imgData={scaleImg}
        alt="steel factory"
        title="Scale you app to infinity"
      />
    </div>
  );
}
