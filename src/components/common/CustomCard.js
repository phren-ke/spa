import { Button, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    card: {
        margin: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%'
    },
    media: {
        height: 194,
        width: '100%',
        objectFit: 'cover',
    },
    cardContent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: 2
    },
    button: {
        marginTop: 1
    },
    seeServiceButton: {
        marginTop: 1,
        color: '#1976d2 !important'
    }
})

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
            <CardContent className={classes.cardContent}>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
                <Button component={Link} to={`/service/${props.id}`} className={classes.seeServiceButton}>{`See Service >`}</Button>
                <Button variant="outlined" className={classes.button}>{`Book Appointment Now`}</Button>
            </CardContent>
        </Card>
    )
}