import React from 'react';
import { Box } from '@mui/material';
import PokemonRow from './PokemonRow';

interface Pokemon {
  id: number;
  name: string;
  types: string[];
  sprite: string;
}

const PokedexTable: React.FC<{ pokemonArray: Pokemon[] }> = ({ pokemonArray }) => {
  return (
    <Box>
      {pokemonArray.map((pokemon) => (
        <PokemonRow key={pokemon.id} pokemon={pokemon} />
      ))}
    </Box>
  );
};

export default PokedexTable;
