import {
    Card,
    CardContent,
    CardHeader,
    Typography,
    IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodoItem } from '../store/actions';
import { EditModal } from './EditModal';

const cardStyle = {
    width: 600,
    margin: '40px auto',
};

export const Item = ({ id, title, description }) => {
    const dispatch = useDispatch();
    const onDelete = useCallback(() => {
        dispatch(deleteTodoItem({ id }));
    }, [id, dispatch]);
    const [isOpen, setIsOpen] = useState(false);
    const onEdit = useCallback(() => {
        setIsOpen(true);
    }, [setIsOpen]);

    return (
        <li>
            <Card sx={cardStyle}>
                <CardHeader
                    title={title}
                    action={
                        <>
                            <IconButton aria-label='edit' onClick={onEdit}>
                                <EditIcon />
                            </IconButton>
                            <IconButton aria-label='delete' onClick={onDelete}>
                                <DeleteIcon />
                            </IconButton>
                        </>
                    }
                />
                <CardContent>
                    <Typography>{description}</Typography>
                </CardContent>
            </Card>
            <EditModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                id={id}
                title={title}
                description={description}
            />
        </li>
    );
};
