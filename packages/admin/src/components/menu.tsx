import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';
import Link from 'next/link';
import React from 'react';

function ListItemLink({ path, name }) {
  return (
    <ListItem style={{ width: '250px' }}>
      <ListItemIcon>
        <SendIcon />
      </ListItemIcon>
      <ListItemText>
        <Link href={path}>{name}</Link>
      </ListItemText>
    </ListItem>
  );
}

const useStyles = makeStyles((theme) => ({}));

export default function Menu({ routes }) {
  return (
    <List>
      {routes.map((route, i) => (
        <ListItemLink key={i} {...route} />
      ))}
    </List>
  );
}
