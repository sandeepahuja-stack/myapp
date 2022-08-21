import * as React from 'react';
import {Pagination as MuiPagination} from '@mui/material';
import Stack from '@mui/material/Stack';

function Pagination({index, count, onChange}: {
    index?: number;
    count: number; 
    onChange?: (...args: any) => void;
}) {
  const [page, setPage] = React.useState(index || 1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    if(onChange) {
        onChange(value);
    }
  };

  return (
    <Stack spacing={2}>
      <MuiPagination data-testid="pagination" count={count} page={page} onChange={handleChange} />
    </Stack>
  );
}

export default Pagination;