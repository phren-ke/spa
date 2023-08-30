import { Button, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    card: {
        margin: '16px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        borderRadius: '8px'
    },
    media: {
        height: '200px',
        width: '100%',
        objectFit: 'cover',
        borderTopLeftRadius: '8px',
        borderTopRightRadius: '8px'
    },
    cardContent: {
        padding: '16px'
    },
    button: {
        marginTop: '8px'
    },
    seeServiceButton: {
        marginTop: '8px',
        color: '#1976d2 !important'
    },
    title: {
        fontWeight: 'bold',
        margin: '0 0 16px 0',
        fontSize: '20px'
    }
});

export const CustomCard = (props) => {
    const { title, description, imageUrl } = props;
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardMedia
                component="img"
                className={classes.media}
                image={imageUrl}
                alt={title}
            />
            <Typography variant="h4" className={classes.title}>{title}</Typography>
            <CardContent className={classes.cardContent}>
                <Typography color="text.secondary">
                    {description}
                </Typography>
                <Button component={Link} to={`/service/${props.id}`} className={classes.seeServiceButton}> {` See Service >`}</Button>
                <Button variant="outlined" className={classes.button}> {`Book Appointment Now`}</Button>
            </CardContent>
        </Card>
    )
}