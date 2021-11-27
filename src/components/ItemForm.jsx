import { Box, TextField } from '@mui/material';

const boxStyle = {
    width: 600,
    margin: '20px auto',
};

export const ItemForm = () => {
    return (
        <Box component='form' sx={boxStyle} noValidate autoComplete='off'>
            <TextField
                id='title'
                label='Название'
                variant='standard'
                fullWidth
                margin='normal'
                color='primary'
            />
            <TextField
                id='description'
                label='Описание'
                variant='standard'
                fullWidth
                margin='normal'
                color='secondary'
            />
        </Box>
    );
};
