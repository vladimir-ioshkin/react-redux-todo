import {
    Box,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
} from '@mui/material';
import { Field } from './Field';
import { DESCRIPTION_ID, TITLE_ID } from '../consts/fields';
import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTodoItem } from '../store/actions';

const dialogContentStyle = {
    paddingTop: 0,
};

export const EditModal = ({ isOpen, setIsOpen, id, title, description }) => {
    const dispatch = useDispatch();
    const [state, setState] = useState({
        [TITLE_ID]: title,
        [DESCRIPTION_ID]: description,
    });

    const onSubmit = useCallback(
        (event) => {
            event.preventDefault();
            dispatch(editTodoItem({ id, ...state }));
            setIsOpen(false);
        },
        [dispatch, setIsOpen, id, state]
    );

    const onClose = useCallback(() => {
        setIsOpen(false);
    }, [setIsOpen]);

    return (
        <Dialog open={isOpen} onClose={onClose}>
            <DialogTitle>Редактирование</DialogTitle>
            <Box
                component='form'
                noValidate
                autoComplete='off'
                onSubmit={onSubmit}
            >
                <DialogContent sx={dialogContentStyle}>
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
                </DialogContent>
                <DialogActions>
                    <Button type='submit' variant='contained'>
                        Сохранить
                    </Button>
                    <Button onClick={onClose}>Отменить</Button>
                </DialogActions>
            </Box>
        </Dialog>
    );
};
