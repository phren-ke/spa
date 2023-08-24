import { Card, CardContent } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';

export const Home = () => {
    return (
        <Link to="/Login">
            <Card>
                <CardContent>Home</CardContent>
            </Card>
        </Link>
    )
}
