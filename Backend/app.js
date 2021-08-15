const express = require('express');
const server = express();
const chatLogic=require('./business-logic/chat-logic');


const listener = server.listen(3001, () => console.log("Listening on port 3001"));

chatLogic.init(listener);