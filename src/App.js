import { Container, ThemeProvider, Typography } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { ItemForm } from './components/ItemForm';
import { ItemList } from './components/ItemList';

const theme = createTheme({
    palette: {
        primary: {
            main: '#6147c2',
        },
        secondary: {
            main: '#cccccc',
        },
    },
});

export const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth='md'>
                <Typography variant='h4' component='h1' align='center' mt={6}>
                    Список дел
                </Typography>
                <ItemForm />
                <ItemList />
            </Container>
        </ThemeProvider>
    );
};
