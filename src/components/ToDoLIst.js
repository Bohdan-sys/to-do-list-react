import { List } from '@mui/material';
import React, { useContext } from 'react';
import { ToDoItem } from './ToDoItem';
import { ListContext } from '../contexts/ListProvider';

export const ToDoList = ({ sortedList }) => {
    const { history } = useContext(ListContext);
    const list = sortedList ? history.filter(item => item.complete) : history.filter(item => !item.complete);

    return (
        <List elevation={3} sx={{ width: '100%', bgcolor: 'background.paper', m: '16px auto', p: 0 }}>
            {list.map((value, index) => {
                return <ToDoItem value={value} index={index} key={index} sortedList={sortedList} />
            })}
        </List>
    )
};