import { TextField } from '@mui/material';
import { useCallback } from 'react';

export const Field = ({ id, label, color, state, setState }) => {
    const onChange = useCallback(
        (event) => {
            setState((prev) => {
                return {
                    ...prev,
                    [id]: event.target.value,
                };
            });
        },
        [id, setState]
    );

    return (
        <TextField
            id={id}
            label={label}
            variant='standard'
            fullWidth
            margin='normal'
            color={color}
            value={state[id]}
            onChange={onChange}
        />
    );
};
