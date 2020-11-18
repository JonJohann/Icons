import React from 'react';
import { CircularProgress } from "@material-ui/core";
import CardContent from '@material-ui/core/CardContent';
import useStyles from './Styles'

export default function Loader(props) {
    
    const classes = useStyles()

    return (
        <CardContent>
            <CircularProgress className={classes.loader}/>
        </CardContent> 
        )
}