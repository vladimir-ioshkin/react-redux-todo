import { Container, Typography } from '@mui/material';
import { ItemForm } from './components/ItemForm';

export const App = () => {
    return (
        <Container maxWidth='md'>
            <Typography variant='h4' component='h1' align='center' mt={6}>
                Список дел
            </Typography>
            <ItemForm />
        </Container>
    );
};
