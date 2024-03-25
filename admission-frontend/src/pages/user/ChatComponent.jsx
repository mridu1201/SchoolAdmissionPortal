import React, { useState, useEffect } from 'react';
import api from '../../services/axiosInstances';
import API_ENDPOINTS from '../../services/axiosEndpoints';
import '../../assets/css/chat.css'

const ChatComponent = () => {
  const [user, setUser] = useState('');
  const [otherUser, setOtherUser] = useState('');
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    // Fetch messages between the current user and the other user
    if (user && otherUser) {
      api.get(API_ENDPOINTS.VIEW_MESSAGE+`/${user}/${otherUser}`)
        .then(response => setMessages(response.data))
        .catch(error => console.error('Error fetching messages:', error));
    }
  }, [user, otherUser]);

  const sendMessage = () => {
    if (user && otherUser) {
      api.post(API_ENDPOINTS.SEND_MESSAGE, {
        sender: user,
        receiver: otherUser,
        message: newMessage
      })
        .then(response => {
          setMessages([...messages, response.data]);
          setNewMessage('');
        })
        .catch(error => console.error('Error sending message:', error));
    }
  };

  return (
    <div className="chat-container">
      <div className="user-inputs">
        <label>
          Your Name:
          <input
            className='input'
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
        </label>
        <label>
          Other User's Name:
          <input
            className='input'
            type="text"
            value={otherUser}
            onChange={(e) => setOtherUser(e.target.value)}
          />
        </label>
      </div>
      <div className="chat-box">
        <h2>Chat with {otherUser}</h2>
        <div className="message-container">
          {messages.map((message, index) => (
            <div key={index} className={message.sender === user ? 'sent' : 'received'}>
              <strong>{message.sender}:</strong> {message.message}
            </div>
          ))}
        </div>
        <div className="message-input">
          <input
            className='input'
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
          />
          <button className='button5' onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatComponent;
