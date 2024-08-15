import React, { useState, useEffect } from "react";
import axiosInstance from '../axiosConfig';
import socket from "../socket";
import 'bootstrap/dist/css/bootstrap.min.css';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    
    const fetchMessages = async () => {
      try {
        const response = await axiosInstance.get('/message/getAll');
        setMessages(response.data);
      } catch (error) {
        console.error('Error al obtener mensajes:', error);
      }
    };

    fetchMessages();
    
    socket.on('message', (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });
    
    return () => socket.off('message');
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userString = localStorage.getItem('user');
      if (!userString) {
        console.error('No user found in localStorage');
        return;
      }

      const user = JSON.parse(userString);
      const userId = user._id;
      
      await axiosInstance.post('/message/store', { text: message, created_by: userId, created_at: new Date() });
      
      socket.emit('message', { text: message, created_by: userId, created_at: new Date() }); 
      setMessage('');
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
    }
  };

  return (
    <div className="chat-box bg-light border rounded p-3 d-flex flex-column" style={{ maxWidth: '85%', maxHeight: '45%' }}>
      <div className="chat-content flex-grow-1 mb-6" style={{ overflowY: 'auto' }}>
        {
            messages.map((msg, index) => (
                <div key={index} className="message mb-2 p-2 border rounded bg-white">
                    <div className="d-flex justify-content-between mb-1">
                    <span className="message-author font-weight-bold">{msg.created_by.name}</span>
                    <span className="message-time text-muted">{new Date(msg.created_at).toLocaleTimeString()}</span>
                    </div>
                    <div className="message-body">{msg.text}</div>
                </div>
            ))
        }
      </div>
      <form onSubmit={handleSubmit} className="d-flex">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Escribe un mensaje..."
          className="form-control mr-2"
        />
        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
    </div>
  );
};

export default Chat;
