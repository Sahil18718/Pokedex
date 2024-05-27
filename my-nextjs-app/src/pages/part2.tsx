import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import { trpc } from '../utils/trpc';
import PokedexTable from '../components/PokedexTable';

const Part2: React.FC = () => {
  const [names, setNames] = useState('');
  const [fetchNames, setFetchNames] = useState<string[]>([]);

  const { data: pokemonArray, isLoading } = trpc.useQuery(['getPokemonArray', fetchNames], {
    enabled: fetchNames.length > 0,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFetchNames(names.split(',').map(name => name.trim()));
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Pokemon Names (comma separated)"
          value={names}
          onChange={(e) => setNames(e.target.value)}
        />
        <Button type="submit">Fetch</Button>
      </form>
      {isLoading ? <p>Loading...</p> : pokemonArray && <PokedexTable pokemonArray={pokemonArray} />}
    </Box>
  );
};

export default Part2;
