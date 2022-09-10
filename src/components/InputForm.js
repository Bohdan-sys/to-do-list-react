import { Card, CardContent, TextField, Button } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { ListContext } from '../contexts/ListProvider';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm, Controller } from 'react-hook-form';

const validationSchema = yup.object({
    text: yup
        .string()
        .trim()
        .required('Please write something'),
});

export const InputForm = () => {
    const { createHistory, editText, editData } = useContext(ListContext);
    const { reset, handleSubmit, setValue, control, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues: {
            text: ''
        }
    });
    useEffect(() => {
        if (editData.text) {
            setValue("text", editData.text)
        }
    }, [editData, setValue]);

    return (
        <Card elevation={2} sx={{ minWidth: 300, marginBottom: 2, marginTop: 2 }}>
            <CardContent sx={{ textAlign: 'end' }}>
                <form onSubmit={handleSubmit(data => {
                    if (editData.id) {
                        editText(data.text, editData.id);
                    } else {
                        createHistory(data);
                    }
                    reset();
                })}>
                    <Controller
                        name="text"
                        control={control}
                        render={({ field: { name, onChange, value } }) =>
                            <TextField
                                name={name}
                                onChange={onChange}
                                fullWidth
                                error={errors.text && Boolean(errors.text)}
                                helperText={errors.text ? errors.text?.message : ''}
                                variant="outlined"
                                label="Write your to-do"
                                value={value}
                            />
                        }
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        endIcon={<ArrowForwardIosIcon fontSize="small" />}
                    >
                        {editData.text ? 'edit' : 'create'}
                    </Button>
                </form>
            </CardContent>
        </Card >

    )
};
