import {
    Card,
    CardContent,
    CardHeader,
    Typography,
    IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodoItem } from '../store/actions';

const cardStyle = {
    width: 600,
    margin: '40px auto',
};

export const Item = ({ id, title, description }) => {
    const dispatch = useDispatch();
    const onDelete = useCallback(
        (event) => {
            event.preventDefault();
            dispatch(deleteTodoItem({ id }));
        },
        [id, dispatch]
    );

    return (
        <li>
            <Card sx={cardStyle}>
                <CardHeader
                    title={title}
                    action={
                        <IconButton aria-label='delete' onClick={onDelete}>
                            <DeleteIcon />
                        </IconButton>
                    }
                />
                <CardContent>
                    <Typography>{description}</Typography>
                </CardContent>
            </Card>
        </li>
    );
};
