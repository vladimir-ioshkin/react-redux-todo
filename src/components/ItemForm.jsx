import { Box, Button, Stack } from '@mui/material';
import { useCallback, useState } from 'react';
import { DESCRIPTION_ID, TITLE_ID } from '../consts/fields';
import { Field } from './Field';

const boxStyle = {
    width: 600,
    margin: '20px auto',
};

export const ItemForm = () => {
    const [state, setState] = useState({
        [TITLE_ID]: '',
        [DESCRIPTION_ID]: '',
    });

    const onSubmit = useCallback((event) => {
        event.preventDefault();
        console.log(state);
    }, [state]);

    return (
        <Box component='form' sx={boxStyle} noValidate autoComplete='off' onSubmit={onSubmit}>
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
