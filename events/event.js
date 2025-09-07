const EventEmitter = require('events');

class MyEventEmitter extends EventEmitter {}

const myEmitter = new MyEventEmitter();

// Listener for 'greet' event
myEmitter.on('seguranca', (who, what) => {
    console.log(`Executando evento segurança: , ${who} fez ${what}`);
});

myEmitter.emit('seguranca', 'João', 'login');