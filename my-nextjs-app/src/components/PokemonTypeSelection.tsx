import React from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';

type PokemonTypeSelectionProps = {
  selectedType: string | undefined;
  selectType: (type: string | undefined) => void;
};

const PokemonTypeSelection: React.FC<PokemonTypeSelectionProps> = ({ selectedType, selectType }) => {
  const types = ['grass', 'fire', 'water']; // Add more types as needed

  return (
    <FormControl fullWidth>
      <InputLabel>Type</InputLabel>
      <Select
        value={selectedType || ''}
        onChange={(e) => selectType(e.target.value || undefined)}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {types.map((type) => (
          <MenuItem key={type} value={type}>
            {type}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default PokemonTypeSelection;
