import { Card, CardContent, CardMedia, Typography } from "@mui/material";
export const CustomCard = (props) => {
    const { title, description, imageUrl } = props;
    return (
        <Card sx={{ maxWidth: 345, margin: 2 }}>
            <CardMedia
                component="img"
                height="194"
                image={imageUrl}
                alt={title}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
        </Card>
    )
}