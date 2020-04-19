import React, { useState, useMemo } from "react";
import {deriveKey} from "../../crypto";
import {makeStyles} from "@material-ui/core/styles";
import {Container, Grid, Paper, TextField, Typography, Divider} from "../../material";

const useStyles = makeStyles(theme => ({
    form: {
        padding: theme.spacing(1)
    }
}));

export default function Crypto() {
    let classes = useStyles();
    let fixedHeightPaper = '';
    let [input, setInput] = useState('');
    let key = useMemo(() => {
        return deriveKey(input);
    }, [input])
    let keyError;
    let encoded = Buffer.concat([Buffer.from("\0\0\0\x0Bssh-ed25519\0\0\0\x20", "ascii"), key.public]);

    return (<Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={12} lg={9}>
                <Paper className={fixedHeightPaper}>
                    <form
                        className={classes.form}
                        autoComplete="off"
                        onSubmit={e => e.preventDefault()}
                    >
                        <Typography variant="h5">Key Converter</Typography>
                        <Divider />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="kkey"
                            label="Password"
                            type="password"
                            id="key"
                            rowsMax={7}
                            helperText={`Type: ${key.type}`}
                            autoComplete="off"
                            multiline
                            onChange={e => setInput(e.target.value)}
                            error={!!keyError}
                            value={input}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="pkey"
                            label="Raw Public Key"
                            id="pkey"
                            autoComplete="off"
                            readonly
                            value={key.public.toString('base64')}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="pkey"
                            label="OpenSSH Public Key"
                            id="pkey"
                            autoComplete="off"
                            readonly
                            value={'ssh-ed25519 ' + encoded.toString('base64')}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="skey"
                            label="Secret Key"
                            id="skey"
                            autoComplete="off"
                            multiline
                            rowsMax={3}
                            readonly
                            value={key.secret.toString('base64')}
                        />
                    </form>
                </Paper>
            </Grid>
        </Grid>
    </Container>);
}