import React, { Fragment } from 'react';
import { Container } from '@mui/material';
import { InputForm } from '../components/InputForm';
import { ToDoList } from '../components/ToDoLIst';

export const MainPage = () => {
    return (
        <Fragment>
            <Container>
                <InputForm />
                <ToDoList sortedList={false} />
            </Container>
        </Fragment>
    )
};
