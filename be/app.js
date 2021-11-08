const { WebSocketServer } = require('ws');
const { PORT } = require('./config');
const validate = require('jsonschema').validate;
const { wsMessageValidator } = require('./models');
const { formWsResponse } = require('./common');

const wss = new WebSocketServer({ port: PORT }, () => {
    console.log(`Server running at: http://localhost:${PORT}`);
});

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        try {
            const obj = JSON.parse(message);
            const validation = validate(obj, wsMessageValidator);
            if(validation.errors.length === 0) {
                ws.send(JSON.stringify(formWsResponse(obj)));
            } else {
                throw new Error(validation)
            }
        } catch(e) {
            ws.send('Validation failed...')
            console.error(e);
        }
    });

});
