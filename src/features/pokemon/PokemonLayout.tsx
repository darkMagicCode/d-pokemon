import { Outlet } from "react-router-dom";
import { usePageBackground } from "@/features/pokemon/hooks/usePageBackground";

const PokemonLayout = () => {
  const sectionBg = usePageBackground();

  return (
    <div
      className="w-full"
      style={sectionBg ? { backgroundColor: sectionBg } : undefined}
    >
      <Outlet />
    </div>
  );
};

export { PokemonLayout as Component };
