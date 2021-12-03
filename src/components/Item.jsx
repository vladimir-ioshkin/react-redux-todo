import { Card, CardContent, Typography } from '@mui/material';

const cardStyle = {
    width: 600,
    margin: '40px auto',
};

export const Item = ({ title, description }) => {
    return (
        <li>
            <Card sx={cardStyle}>
                <CardContent>
                    <Typography>{title}</Typography>
                    <Typography>{description}</Typography>
                </CardContent>
            </Card>
        </li>
    );
};
