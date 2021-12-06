import { DESCRIPTION_ID, TITLE_ID, TAG_ID } from '../consts/fields';
import { Field } from './Field';

export const FormFields = ({ state, setState }) => {
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
            <Field
                id={TAG_ID}
                label='Тег'
                color='secondary'
                state={state}
                setState={setState}
            />
        </>
    );
};
