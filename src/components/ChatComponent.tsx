// src/components/ChatComponent.tsx
import React, { FormEvent, useState } from "react";

const ChatComponent: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");

  const handleSend = (e: FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([...messages, input]);
      setInput("");
    }
  };

  return (
    <div className="flex flex-col h-96 w-full p-4 bg-transparent border-2 border-red-500">
      <div className="flex-1 overflow-y-auto flex flex-col items-end">
        {messages.map((msg, index) => (
          <div
            key={index}
            className="my-2 p-3 bg-transparent  backdrop-blur-md rounded-lg shadow-lg border border-1 border-slate-600 border-opacity-50 inline-block"
          >
            {msg}
          </div>
        ))}
      </div>
      <form onSubmit={handleSend} className="flex mt-4 gap-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 border border-slate-600 rounded-lg bg-transparent backdrop-blur-lg"
          placeholder="Type a message..."
        />
        <button className="p-[3px] relative">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-700 rounded-lg" />
          <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
            Send
          </div>
        </button>
      </form>
    </div>
  );
};

export default ChatComponent;
