import { Button, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

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
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
                <Button variant="outlined">{`Book Appointment Now`}</Button>
            </CardContent>
        </Card>
    )
}