import { w3cwebsocket as W3CWebSocket } from "websocket";
import { LineReader } from 'line-reader-browser';
import { ITERATION_SIZE, resultObj } from '../models/constants'

let client = new W3CWebSocket('ws://127.0.0.1:3001');
let totalSaved = {...resultObj};

export const connectToServer = (updateData) => {
    client.onopen = () => {
        console.log('WebSocket Client Connected');
    };
    client.onmessage = (message) => {
        try {
            const data = JSON.parse(message.data);
            data.forEach((item) => {
                if(item.result) {
                    totalSaved.passed++;
                    totalSaved.texts.push({line: item.line, text: item.text});
                };
            });
            updateData(totalSaved);
        } catch (e) {
            console.error('could not convert message to object', e);
        }
    };

    client.onclose = (e) => {
        console.log('Socket is closed. Reconnect attempt will be in 1 second', e.reason);
        setTimeout(() => restartConnection(updateData), 1000);
    }
};

export const restartConnection = (updateData) => {
    client.close();
    client = new W3CWebSocket('ws://127.0.0.1:3001');
    connectToServer(updateData)
}

export const sendDataToServer = (file, updateData) => {
    totalSaved = {...resultObj, count: 0, texts: []};

    const sendAndSave = (data) => {
        totalSaved.count = totalSaved.count + dataToSend.length;
        client.send(JSON.stringify(data));
        dataToSend = [];
    }

    let dataToSend = [];
    const lr = new LineReader(file, 4 * 1024);
    lr.forEachLine((line, i) => {
        dataToSend.push({line: i, text: line});
        if(dataToSend.length === ITERATION_SIZE) {
            sendAndSave(dataToSend);
        }
    }).then(() => {
        if(dataToSend.length > 0) {
            sendAndSave(dataToSend);
        }
        setTimeout(() => {
            totalSaved.done = true;
            updateData(totalSaved);
        }, 1000);
    });
}
