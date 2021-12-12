import { useSelector } from 'react-redux';
import { Chip } from '@mui/material';

const chipStyle = {
    margin: '0 10px',
    fontWeight: 700,
};

export const TagChip = ({ tag }) => {
    const tagColors = useSelector((state) => {
        return state.tagColors;
    });

    return (
        <Chip
            sx={{
                ...chipStyle,
                backgroundColor: tagColors[tag],
            }}
            label={tag}
        />
    );
};
