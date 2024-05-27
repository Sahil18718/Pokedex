import React from "react";
import { Box, Typography, Avatar } from "@mui/material";

interface Pokemon {
  id: number;
  name: string;
  types: string[];
  sprite: string;
}

const PokemonRow: React.FC<{ pokemon: Pokemon }> = ({ pokemon }) => {
  return (
    <Box display="flex" alignItems="center" p={2}>
      <Avatar src={pokemon.sprite} alt={pokemon.name} />
      <Box ml={2}>
        <Typography variant="h6">{pokemon.name}</Typography>
        <Typography>ID: {pokemon.id}</Typography>
        <Typography>Types: {pokemon.types.join(", ")}</Typography>
      </Box>
    </Box>
  );
};

export default PokemonRow;
