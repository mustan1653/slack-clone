import React, { useState } from 'react';
import db from './firebase';
import { useStateValue } from './StateProvider';
import firebase from 'firebase';

import './ChatInput.css';






const ChatInput = ({ channelName, channelId }) => {
    console.log(channelId)
    const [input, setInput] = useState("");
    const [{ user }] = useStateValue();

    console.log(user);

    const sendMessage = (e) => {
        
        e.preventDefault();
        if (channelId) {
            
            db.collection('rooms').doc(channelId).collection("messages").add({
                message: input,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                username: user.displayName,
                userimage: user.photoURL,
            })
        };
    }
    
    return (
        <div className="chatInput">
            <form>
                <input
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder={`Message #${channelName?.toLowerCase()}`} />
                <button type="submit" onClick={sendMessage} >
                    SEND
                </button>
            </form>
            
        </div>
    );
}

export default ChatInput;