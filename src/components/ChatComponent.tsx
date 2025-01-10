// src/components/ChatComponent.tsx
import React, { FormEvent, useState } from 'react';

const ChatComponent: React.FC = () => {
    const [messages, setMessages] = useState<string[]>([]);
    const [input, setInput] = useState<string>('');

    const handleSend = (e: FormEvent) => {
        e.preventDefault();
        if (input.trim()) {
            setMessages([...messages, input]);
            setInput('');
        }
    };

    return (
        <div className="flex flex-col h-96 w-full p-4 bg-transparent border-2 border-red-500">
            <div className="flex-1 overflow-y-auto">
                {messages.map((msg, index) => (
                    <div key={index} className="my-2 p-3 bg-transparent  backdrop-blur-md rounded-lg shadow-lg border border-1 border-opacity-5">
                        {msg}
                    </div>
                ))}
            </div>
            <form onSubmit={handleSend} className="flex mt-4">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-1 p-2 border border-gray-300 rounded-lg"
                    placeholder="Type a message..."
                />
                <button type="submit" className="ml-2 p-2 bg-blue-500 text-white rounded-lg">
                    Send
                </button>
            </form>
        </div>
    );
};

export default ChatComponent;
