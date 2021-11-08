import React, { useEffect, useState } from 'react';
import logo from './../../logo.png';
import './App.css';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Button, Paper, Divider } from '@material-ui/core';
import Dropzone from '../Dropzone/Dropzone';
import ResultGrid from '../ResultGrid/ResultGrid';
import { useCheckEnabled } from "./App.hooks";
import { connectToServer, sendDataToServer } from '../../api/request';
import { resultObj } from "../../models/constants";

function App() {
    const [isCheckEnabled, setCheckEnabled] = useCheckEnabled();
    const [fileData, setFileData] = useState(null);
    const [totalDone, setTotalDone] = useState({...resultObj});

    const updateTextData = (file) => {
        setFileData(file);
    }

    const updateTotalDone = (obj) => {
        setTotalDone({...obj});
    }

    useEffect( () => connectToServer(updateTotalDone), []);
    return (
        <Container maxWidth="sm" className="app">
            <Paper>
                <div className="app-header">
                    <img src={logo} className="app-logo" alt="logo"/>
                    <Typography className="app-header-text" variant="h4" component="h1" gutterBottom>
                        Interview Task {totalDone.count > 0 && <span>{ totalDone.passed } / {totalDone.count}</span> }
                    </Typography>
                </div>
                <Divider />
                <div className="app-content">
                    {totalDone.count === undefined && <div className="app-content-item">
                        <Dropzone setCheckEnabled={setCheckEnabled} setFileData={updateTextData} updateTotalDone={updateTotalDone}/>
                    </div>}
                    {totalDone.count !== undefined && <div key={totalDone.count} className="app-content-item">
                        <ResultGrid text={totalDone.texts}/>
                    </div>}
                </div>
                <div className="app-footer">
                    <Button variant="contained" color="primary" disabled={isCheckEnabled} onClick={() => startProcessing(fileData, setCheckEnabled, updateTotalDone)}>
                        Check file
                    </Button>
                    <Button variant="contained" color="secondary" disabled={!totalDone.done} onClick={() => resetProcessing(updateTotalDone, setCheckEnabled)}>
                        Reset
                    </Button>
                </div>
            </Paper>
        </Container>
    );
}

const startProcessing = (fileData, setCheckEnabled, updateTotalDone) => {
    sendDataToServer(fileData, updateTotalDone);
    setCheckEnabled(false);
}

const resetProcessing = (updateTotalDone, setCheckEnabled) => {
    updateTotalDone({...resultObj});
    setCheckEnabled(false);
}

export default App;
