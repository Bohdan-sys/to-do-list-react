import { List } from '@mui/material';
import React, { useContext } from 'react';
import { ToDoItem } from './ToDoItem';
import { ListContext } from '../contexts/ListProvider';

export const ToDoList = () => {
    const { history } = useContext(ListContext);

    return (
        <List elevation={3} sx={{ width: '100%', bgcolor: 'background.paper', m: '0 auto', p: 0 }}>
            {history.map((value, index) => {
                return <ToDoItem value={value} index={index} key={index} />
            })}
        </List>
    )
};