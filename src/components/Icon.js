import React from 'react';
import { Icon } from '@material-ui/core';

export default function RealIcon(props) {
    return (
        <Icon>
            <img src={props.icon} alt={props.name} />
        </Icon>
        )
}