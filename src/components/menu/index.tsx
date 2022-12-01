import React from 'react';
import Link from '@mui/material/Link';
import { Chip, Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import useMenuData from './useMenuData';

const Menu: React.FC = () => {
  const { data } = useMenuData();
  return (<List>
        {data !== null
          ? data.map(({
            stepName,
            count
          }) => (
            <ListItem
                key={stepName}
                sx={{
                  border: '1px solid lightgrey'
                }}
            >
                <ListItemText>
                    <Link
                        href={`/search/${stepName}`}
                    >
                        {stepName.toUpperCase()}
                    </Link>
                    <Chip
                        sx={(theme) => ({
                          marginLeft: theme.spacing(2)
                        })}
                        label={count}
                    />
                </ListItemText>
            </ListItem>
          ))
          : <Typography>{'No items for view'}</Typography>
    }
    </List>
  );
};

export default Menu;
