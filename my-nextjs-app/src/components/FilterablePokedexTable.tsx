import React, { useState } from "react";
import { Box } from "@mui/material";
import { trpc } from "../../utils/trpc";
import PokemonTypeSelection from "./PokemonTypeSelection";
import PokedexTable from "./PokedexTable";

const FilterablePokedexTable: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string | undefined>(
    undefined
  );

  const { data: pokemonArray, isLoading } = trpc.useQuery([
    "getPokemonByType",
    selectedType,
  ]);

  return (
    <Box>
      <PokemonTypeSelection
        selectedType={selectedType}
        selectType={setSelectedType}
      />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <PokedexTable pokemonArray={pokemonArray || []} />
      )}
    </Box>
  );
};

export default FilterablePokedexTable;
