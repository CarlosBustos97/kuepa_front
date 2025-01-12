import { io } from 'socket.io-client';

const SERVERIP = '192.168.1.7';

const socket = io(`http://${SERVERIP}:5000`, {
  transports: ['websocket'],
  auth: {
    token: localStorage.getItem('token')
  }
});

export default socket;
