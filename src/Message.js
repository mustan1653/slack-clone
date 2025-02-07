import React from 'react';
import './Message.css';


const Message = ({message, timestamp, username, userimage}) => {
    return (
        <div className="message">
            <img src={userimage} alt="" />
            <div className="message__info">
                <h4>
                    {username} <span className="message__timestamp">{new Date(timestamp?.toDate()).toUTCString()}</span>
                </h4>
                <p>{message}</p>
            </div>
        </div>
    );
}

export default Message;