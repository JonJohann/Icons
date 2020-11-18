import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import fetchIcons from './api/fetchIcons'
import SimpleCard from "./components/SimpleCard";
import ErrorCard from "./components/ErrorCard";
import { Button, Grid } from "@material-ui/core";
import LoaderCard from "./components/LoaderCard";

function App() {
    const initialState = {
        lockOpen: {},
        callSplit: {},
        attachFile: {}
    }
    const [icons, setIcons] = useState(initialState)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
            fetchIcons()
                .then(res => {
                    if (res.statusText !== "OK") {
                        setError(true)
                    }
                    return res
                })
                .then(res => res.json())
                .then(data => { setLoading(false); setIcons(data) })
                .catch(() => setError(true))
    }, [])

    const errorSimple = key =>
        error ? <ErrorCard key={key} /> : <SimpleCard key={key} {...icons[key]} />

    return (
        <Container maxWidth="md">
            <Typography variant="h1" align="center">
                Icon cards
            </Typography>
            <Grid container
                justify="center"
                alignItems="center">
                {loading ? Object.keys(icons).map(key => <Grid item key={key} xs={12} sm={4}><LoaderCard /></Grid>) :
                    Object.keys(icons).map(key => <Grid item key={key} xs={12} sm={4}>{errorSimple(key)}</Grid>)}
            </Grid>
            <Button onClick={() => setLoading(!loading)} disabled={error}>{loading ? "Normal" : "Loaders"}</Button>
            <Button onClick={() => setError(!error)} disabled={loading}>{error ? "Normal" :  "Error"}</Button>
        </Container>
    );
}

export default App;
