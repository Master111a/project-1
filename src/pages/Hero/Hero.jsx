import HeroLeft from "./components/HeroLeft";
import HeroRight from "./components/HeroRight";

export default function Hero() {
  return (
    <div className="flex items-center h-full w-full max-w-xl mx-auto justify-between">
      <HeroLeft />
      <HeroRight />
    </div>
  );
}
