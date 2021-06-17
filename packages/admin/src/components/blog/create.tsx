import { Paper, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import React from 'react';
import { useCreateBlogPost } from '../../hooks/blog-post';

function CreateForm({ create }) {
  const [title, setTitle] = React.useState('');

  return (
    <Paper style={{ width: 'max-content', margin: 'auto', marginTop: '10em', padding: '3em' }}>
      <form noValidate autoComplete="off">
        <TextField
          label="Title"
          style={{ width: '400px' }}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </form>
      <Button color="secondary" type="submit" onClick={() => create({ title })}>
        SAVE
      </Button>
    </Paper>
  );
}

export default function CreateBlogPost() {
  const { createBlogPost } = useCreateBlogPost();

  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <>
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <CreateForm create={createBlogPost} />
      </Modal>
      <Button color="primary" variant="contained" onClick={() => setIsModalOpen(true)}>
        Create Blog Post
      </Button>{' '}
    </>
  );
}
