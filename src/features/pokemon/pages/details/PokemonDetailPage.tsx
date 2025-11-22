import { useParams, useNavigate } from "react-router-dom";
import { DetailPage } from "@/shared/components/templates";
import { usePokemonDetail } from "../../api/queries";
import { createPokemonDetailConfig } from "./pokemonDetailConfig";
import type { Pokemon } from "../../types";

export const PokemonDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data: pokemon, isLoading, error, refetch } = usePokemonDetail(id);

  const handleBack = () => {
    navigate(-1);
  };

  const detailConfig = createPokemonDetailConfig(id);

  return (
    <DetailPage<Pokemon>
      data={pokemon}
      isLoading={isLoading}
      error={error}
      onRetry={refetch}
      onBack={handleBack}
      {...detailConfig}
    />
  );
};
