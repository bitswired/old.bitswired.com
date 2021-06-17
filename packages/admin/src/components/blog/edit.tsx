import { BlogPost } from '@bitswired-web/graphql';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import AddIcon from '@material-ui/icons/Add';
import pick from 'lodash/pick';
import React from 'react';
import { useForm } from 'react-hook-form';
import ReactMarkdown from 'react-markdown';
import { useUpdateBlogPost } from '../../hooks/blog-post';
import { SwitchInput } from '../input/switch';
import { TextInput } from '../input/text';
import CreateTag from '../tag/create';
import SelectTag from '../tag/select';

function Meta({ control }) {
  return (
    <List>
      <ListItem>
        <TextInput name="title" label="Title" control={control} />
      </ListItem>
      <ListItem>
        <TextInput name="description" label="Description" control={control} />
      </ListItem>
      <ListItem>
        <TextInput name="image" label="Image" control={control} />
      </ListItem>
      <ListItem>
        <TextInput name="slug" label="Slug" control={control} />
      </ListItem>
      <ListItem>
        <SwitchInput name="published" label="Published" control={control} />
      </ListItem>

      <ListItem>
        <SelectTag name="tags" label="Tags" multiple control={control} variant="filled" />

        <CreateTag
          component={
            <Fab color="primary" aria-label="add">
              <AddIcon />
            </Fab>
          }
        />
      </ListItem>

      <Button type="submit" variant="contained" color="primary" style={{ margin: '1em' }}>
        Save
      </Button>
    </List>
  );
}

const components = {
  img({ src, alt, title, ...p }) {
    return (
      <figure>
        <img style={{ width: '100%', objectFit: 'contain' }} src={src} alt={alt} />
        <figcaption>{title}</figcaption>
      </figure>
    );
  }
};

function Body({ control }) {
  const [isFocused, setIsFocused] = React.useState(true);
  const setFocused = () => {
    setIsFocused(true);
  };
  const setBlurred = () => {
    setIsFocused(false);
  };

  const x: HTMLTextAreaElement = document.getElementById('body-input');

  console.log(isFocused ? 'focused' : 'blurred');

  return (
    <ClickAwayListener onClickAway={setBlurred}>
      <div>
        <div style={{ display: !isFocused ? 'none' : 'block' }}>
          <TextInput
            id="body-input"
            name="body"
            label="Body"
            control={control}
            multiline
            variant="filled"
            rows={20}
            rowsMax={500}
          />
        </div>
        {!isFocused && (
          <Box onClick={setFocused}>
            <ReactMarkdown components={components}>{x?.value}</ReactMarkdown>
          </Box>
        )}
      </div>
    </ClickAwayListener>
  );
}

interface EditBlogPostProps {
  blogPost: BlogPost;
}

export default function EditBlogPost({ blogPost: rawBlogPost }: EditBlogPostProps) {
  const blogPost = pick(rawBlogPost, [
    'title',
    'description',
    'image',
    'slug',
    'body',
    'published'
  ]);
  console.log(blogPost, 'jiii');

  const { updateBlogPost } = useUpdateBlogPost();

  const { control, handleSubmit } = useForm({ defaultValues: blogPost });

  const onSubmit = (values) => {
    console.log(values);
    updateBlogPost({ id: rawBlogPost.id, ...values });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3} style={{ padding: '2em' }}>
        <Grid item xs={8}>
          <Body control={control} />
        </Grid>
        <Grid item xs={4}>
          <Meta control={control} />
        </Grid>
      </Grid>
    </form>
  );
}
