import React, { useState, useMemo } from "react";
import {makeStyles} from "@material-ui/core/styles";
import { Container, Grid, Paper, TextField, Typography, 
    InputBase, Divider, IconButton, MenuIcon,
    Select, MenuItem, Chip, Box, SendIcon
} from "../../material";

import { red, green } from "@material-ui/core/colors";

import { If } from "../helpers";

import DirectionsIcon from "@material-ui/icons/Directions";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useGamestate, useAPI } from "../../hooks";
import { useSelector, useDispatch } from "react-redux";

import Highlight from "react-highlight.js";

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-min-noconflict/ext-language_tools";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
       marginBottom: theme.spacing(1),
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    chip: {
        margin: theme.spacing(1)
    },
    divider: {
        height: 28,
        margin: 4,
    },
    method: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1)
    },
}));

export default function ApiClient() {
    let classes = useStyles();
    let response = useSelector(state => state['api-response']);
    let dispatch = useDispatch();
    let api = useAPI();
    let state = useSelector(state => state['api-request']);
    let updateState = data => dispatch({ type: 'SET_API_REQUESET', data});
    let gameState = useGamestate();
    const paletteType = useSelector(store => store.theme);

    console.log(gameState);
    let paths = [];
    if ( gameState && gameState.state && gameState.state[state.method] ) {
        paths = Object.keys(gameState.state[state.method]).map(x => x.substr(1));
    }

    function request() {
        let headers = {};
        if (state.method !== "GET") {
            headers['content-type'] = 'application/json';
        }
        return api.client({
            method: state.method,
            headers: headers,
            url: '/' + state.path,
            data: state.method !== "GET" ? JSON.parse(state.data) : undefined,
            validateStatus: x => true
        });
    }
    let base = api.defaults.baseURL || '';

    return (<Container maxWidth="lg" className={classes.container}>
        <form
            autoComplete="off"
            onSubmit={e => {dispatch({
                type: 'API_CLIENT_REQUEST',
                request: request()
            }); e.preventDefault()}}
        >
        <Paper component="form" className={classes.root} elevation={3}>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={state.method}
                onChange={e => updateState({...state, method: e.target.value})}
                className={classes.method}
            >
                <MenuItem value={'GET'}>GET</MenuItem>
                <MenuItem value={'POST'}>POST</MenuItem>
            </Select>

            <TextField 
                value={base + '/'}
                style={{width: `${base.length}ex`}}
                InputProps={{
                    readOnly: true,
                }}
            />

            <Autocomplete
                id="combo-box-demo"
                options={paths}
                getOptionLabel={option => option}
                inputValue={state.path}
                className={classes.input}
                freeSolo
                selectOnFocus
                onInputChange={(e,v) => updateState({...state, path: v})}
                renderInput={params => (
                    <TextField
                        {...params}
                        fullWidth
                        id="usridx"
                        placeholder="path"
                        name="usridx"
                        autoComplete="off"
                    />
                )}
            />

            <Divider className={classes.divider} orientation="vertical" />
            <IconButton
                color="primary"
                className={classes.iconButton}
                type="submit"
                onClick={() => dispatch({
                    type: 'API_CLIENT_REQUEST',
                    request: request()
                })}
            >
                <SendIcon />
            </IconButton>
        </Paper>
        </form>
        <If check={!!response}>
            
        </If>
        <Grid container spacing={2} direction="row-reverse">
            <If check={state.method === "POST"}>
            <Grid item xs={6}>
                <Paper>
                    <AceEditor
                        mode="json"
                        theme={paletteType === "light" ? "github" : "monokai"}
                        onChange={e => updateState({...state, data: e})}
                        value={state.data}
                        width="100%"
                        height="300px"
                        fontSize={14}
                        name="api-ace"
                        editorProps={{ $blockScrolling: true }}
                    />
                </Paper>
            </Grid>
            </If>
            <Grid item xs={state.method === "POST" ? 6 : 12}>
            <If check={!!response}>
                <Paper variant="outlined">
                    <Chip
                        className={classes.chip}
                        color={(response && response.status === 200) ? green[30] : red[30]}
                        label={`Status: ${response && response.status}`}
                    />
                    {Object.entries(response ? response.headers : {}).map(([k, v]) => <Chip
                        className={classes.chip}
                        color="default"
                        label={`${k}: ${v}`}
                    />)}
                </Paper>
                <Paper>
                    <Highlight language="json">{JSON.stringify(response && response.data, null, '\t')}</Highlight>
                </Paper>
            </If>
            </Grid>
        </Grid>
    </Container>);
}