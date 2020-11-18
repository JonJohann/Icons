import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Button, CardActions } from '@material-ui/core';
import Loader from './Loader'
import useStyles from './Styles'

export default function LoaderCard(props) {

    const classes = useStyles();

    return (
        <Card className={classes.root}>
                <CardContent>
                    <Loader/> 
                    <CardActions>
                        <Button disabled>Flytt ikon</Button>
                        <Button disabled>Se kilde</Button>
                    </CardActions>
                </CardContent>
        </Card>
    );
}
