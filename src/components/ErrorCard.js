import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Button, CardActions } from '@material-ui/core';
import useStyles from './Styles'

export default function ErrorCard() {

    const classes = useStyles();
    const [errorMessage, setErrorMessage] = useState(0)
    const errorMessages = ["Nettverksfeil. Kontakt nettverksadministrator", "Her gikk det galt gitt", "404 Icon not found", 
    "Vi opplever desverre tekniske problemer"]

    const changeErrorMessage = () => errorMessage >= 3 ? setErrorMessage(0) : setErrorMessage(errorMessage + 1);

    return (
        <Card className={classes.root}>

                <CardContent className={classes.content}>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Error
                    </Typography>
                    <Typography variant="body2" component="p">
                        {errorMessages[errorMessage]}
                    </Typography>
                    <CardActions>
                        <Button onClick={changeErrorMessage}>Endre feilmelding</Button>
                    </CardActions>
                </CardContent>
        </Card>
    );
}
