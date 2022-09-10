import React, { useContext } from 'react';
import { ListItem, ListItemButton, ListItemIcon, ListItemText, IconButton, Checkbox, Stack } from '@mui/material';
import { Delete, ModeEdit } from '@mui/icons-material';
import { ListContext } from '../contexts/ListProvider';

export const ToDoItem = ({ value, index, sortedList }) => {
    const { removeHistory, editComplete, handleEditData } = useContext(ListContext);
    return (
        <ListItem
            disablePadding
            edge="end"
        >
            <ListItemButton sx={{ p: 2 }}
                dense
                onClick={() => editComplete(value.complete, value.id)}
            >
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        disableRipple
                        checked={value.complete}
                    />
                </ListItemIcon>
                <ListItemText primary={`${index + 1}. ${value.text}`} />
            </ListItemButton>
            <Stack direction="row" spacing={0}>
                {!sortedList ? <IconButton
                    aria-label="edit"
                    onClick={() => handleEditData(value)}
                >
                    <ModeEdit />
                </IconButton>
                    : null}

                <IconButton
                    aria-label="delete"
                    color="error"
                    onClick={() => removeHistory(value.id)}
                >
                    <Delete />
                </IconButton>
            </Stack>
        </ListItem>
    )
};
