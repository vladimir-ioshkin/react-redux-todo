import { TextField } from '@mui/material';
import { useCallback } from 'react';

export const Field = ({
    required,
    id,
    label,
    color,
    state,
    setState,
    select = false,
    children,
}) => {
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
            required={required}
            select={select}
            id={id}
            label={label}
            variant='standard'
            fullWidth
            margin='normal'
            color={color}
            value={state[id]}
            onChange={onChange}
        >
            {children}
        </TextField>
    );
};
