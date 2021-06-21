import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SendIcon from '@material-ui/icons/Send';
import Link from 'next/link';
import React from 'react';

interface Route {
  path: string;
  name: string;
}

interface ListItemLinkProps {
  route: Route;
}

function ListItemLink({ route }: ListItemLinkProps) {
  return (
    <ListItem style={{ width: '250px' }}>
      <ListItemIcon>
        <SendIcon />
      </ListItemIcon>
      <ListItemText>
        <Link href={route.path}>{route.name}</Link>
      </ListItemText>
    </ListItem>
  );
}

interface MenuProps {
  routes: Route[];
}

export default function Menu({ routes }: MenuProps): JSX.Element {
  return (
    <List>
      {routes.map((route, index) => (
        <ListItemLink key={index} route={route} />
      ))}
    </List>
  );
}
