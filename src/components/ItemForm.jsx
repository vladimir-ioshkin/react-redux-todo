import { Box, Button, Stack } from '@mui/material';
import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { DESCRIPTION_ID, TITLE_ID } from '../consts/fields';
import { addTodoItem } from '../store/actions';
import { Field } from './Field';

const boxStyle = {
    width: 600,
    margin: '20px auto',
};

export const ItemForm = () => {
    const dispatch = useDispatch();

    const [state, setState] = useState({
        [TITLE_ID]: '',
        [DESCRIPTION_ID]: '',
    });

    const onSubmit = useCallback(
        (event) => {
            event.preventDefault();
            dispatch(addTodoItem(state));
        },
        [state, dispatch]
    );

    return (
        <Box
            component='form'
            sx={boxStyle}
            noValidate
            autoComplete='off'
            onSubmit={onSubmit}
        >
            <Field
                id={TITLE_ID}
                label='Название'
                color='primary'
                state={state}
                setState={setState}
            />
            <Field
                id={DESCRIPTION_ID}
                label='Описание'
                color='secondary'
                state={state}
                setState={setState}
            />
            <Stack direction='row' mt={4} spacing={1}>
                <Button type='submit' variant='contained' margin='normal'>
                    Добавить
                </Button>
            </Stack>
        </Box>
    );
};
