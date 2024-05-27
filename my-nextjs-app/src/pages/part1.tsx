import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import { trpc } from '../utils/trpc';
import PokemonRow from '../components/PokemonRow';

const Part1: React.FC = () => {
  const [name, setName] = useState('');
  const [fetchName, setFetchName] = useState('');

  const { data: pokemon, isLoading } = trpc.useQuery(['getPokemon', fetchName], {
    enabled: !!fetchName,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFetchName(name);
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Pokemon Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button type="submit">Fetch</Button>
      </form>
      {isLoading ? <p>Loading...</p> : pokemon && <PokemonRow pokemon={pokemon} />}
    </Box>
  );
};

export default Part1;
