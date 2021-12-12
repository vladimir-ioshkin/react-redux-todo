import { useSelector } from 'react-redux';
import { DESCRIPTION_ID, TITLE_ID, TAG_ID } from '../consts/fields';
import { Field } from './Field';
import { MenuItem } from '@mui/material';

export const FormFields = ({ state, setState }) => {
    const tags = useSelector((state) => {
        return state.tags;
    });
    
    return (
        <>
            <Field
                required
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
            {/* <TagSelect
                state={state}
                setState={setState}
            /> */}
            <Field
                select
                id={TAG_ID}
                label='Тег'
                color='secondary'
                state={state}
                setState={setState}
            >
                {tags.map((tag) => (
                    <MenuItem key={tag} value={tag}>
                        {tag}
                    </MenuItem>
                ))}
            </Field>
        </>
    );
};
