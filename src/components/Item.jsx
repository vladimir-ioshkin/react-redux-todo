import {
    Card,
    CardContent,
    CardHeader,
    Typography,
    IconButton,
    Slide,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodoItem } from '../store/actions';
import { EditModal } from './EditModal';
import { TagChip } from './TagChip';

const cardStyle = {
    width: 600,
    margin: '40px auto',
};

export const Item = ({ item }) => {
    const { id, title, description, tag } = item;
    const dispatch = useDispatch();
    const onDelete = useCallback(() => {
        dispatch(deleteTodoItem({ id }));
    }, [id, dispatch]);
    const [isOpen, setIsOpen] = useState(false);
    const onEdit = useCallback(() => {
        setIsOpen(true);
    }, [setIsOpen]);

    return (
        <Slide
            direction='right'
            in={true}
            mountOnEnter
            unmountOnExit
            timeout={{
                appear: 500,
                enter: 300,
                exit: 500,
            }}
        >
            <li>
                <Card sx={cardStyle}>
                    <CardHeader
                        title={
                            <>
                                {title}
                                <TagChip tag={tag} />
                            </>
                        }
                        action={
                            <>
                                <IconButton aria-label='edit' onClick={onEdit}>
                                    <EditIcon />
                                </IconButton>
                                <IconButton
                                    aria-label='delete'
                                    onClick={onDelete}
                                >
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
                    tag={tag}
                />
            </li>
        </Slide>
    );
};
