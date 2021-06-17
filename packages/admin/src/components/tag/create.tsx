import { Box, Paper, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Modal';
import React from 'react';
import { useCreateTag } from '../../hooks/tag';

function CreateForm({ create }) {
  const [name, setName] = React.useState('');

  return (
    <Paper style={{ width: 'max-content', margin: 'auto', marginTop: '10em', padding: '3em' }}>
      <form noValidate autoComplete="off">
        <TextField
          label="Name"
          style={{ width: '400px' }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      <Button color="secondary" type="submit" onClick={() => create({ name })}>
        SAVE
      </Button>
    </Paper>
  );
}

export default function CreateTag({ component }) {
  const { createTag } = useCreateTag();

  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  return (
    <>
      <Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
        <CreateForm create={createTag} />
      </Dialog>

      <Box component="span" onClick={() => setIsDialogOpen(true)}>
        {component}
      </Box>
    </>
  );
}
