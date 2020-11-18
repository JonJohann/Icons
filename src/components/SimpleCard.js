import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Button, CardActions } from '@material-ui/core';
import Icon from './Icon'
import useStyles from './Styles'

export default function SimpleCard(props) {

    const classes = useStyles();
    const [iconPosition, setIconPosition] = useState(0)
    const [disabled, setDisabled] = useState(false)
    
    const changeIconPos = () => iconPosition >= 3 ? setIconPosition(0) : setIconPosition(iconPosition + 1);

    return (
        <Card className={classes.root}>
                <CardContent>
                    {iconPosition === 0 ? <Icon {...props}/> : null}
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {props.name}
                    </Typography>
                    {iconPosition === 1 ? <Icon {...props}/> : null}
                    <Typography variant="body2" component="p">
                        {props.description}
                    </Typography>
                    <CardActions>
                        {iconPosition === 2 ? <Icon {...props}/> : null}
                        <Button onClick={changeIconPos}>Flytt ikon</Button>
                        <Button href={props.link} disabled={disabled} onClick={()=>setDisabled(true)}>Se kilde</Button>
                        {iconPosition === 3 ? <Icon {...props}/> : null}
                    </CardActions>
                </CardContent>
        </Card>
    );
}
