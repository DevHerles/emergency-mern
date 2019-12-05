const socket_io = require('socket.io');
const JWT = require('jsonwebtoken');
const Emergency = require('../models/emergency.mode');

let io = socket_io();
const emergencyChangeStream = Emergency.watch();

emergencyChangeStream.on('change', (change) => {
  console.log('emergencyChangeStream: ' + JSON.stringify(change));
  io.emit('changeData', change);
})

module.exports = {
  add: async (request, response, next) => {
    const { code, phoneNumber, description, dateTime } = request.body;

    const newEmergency = new Emergency({ code , phoneNumber, description, dateTime });
    await newEmergency.save()
      .catch((error) => {
        console.log(error.errmsg);
        response.status(400).json('Error: '+ error);
      });
    response.status(200).json({'result': 'OK!'});
  }
}
