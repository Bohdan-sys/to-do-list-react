import React, { Fragment } from 'react';
import { Container } from '@mui/material';
import { ToDoList } from '../components/ToDoLIst';

export const ArchivePage = () => {
    return (
        <Fragment>
            <Container>
                <ToDoList sortedList={true} />
            </Container>
        </Fragment>
    )
};
