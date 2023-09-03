// import React, { useState } from 'react';
// import axios from 'axios';

// function Frontend() {
//     const [question, setQuestion] = useState('');
//     const [answer, setAnswer] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await axios.post('http://127.0.0.1:5000/suresh', {
//                 question: question,
//             });

//             // Set the answer in state
//             setAnswer(response.data.answer);
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     return (
//         <>
//             <div className="mt-4 mx-4">
//                 <p className="text-white italic font-bold text-xl">ChatGPT</p>
//             </div>
//             <div className="mt-6">
//                 <div className="flex flex-col items-end">
//                     <p className="text-white bg-blue-600 rounded-full p-2 mr-4 ">{question}</p>
//                 </div>
//                 <div className="flex flex-col items-start">
//                     <p className="text-blue-400 bg-white rounded-full p-2 mt-4 ml-4">{answer}</p>
//                 </div>
//             </div>
//             <form onSubmit={handleSubmit}>

//                 <div className="fixed bottom-0 w-full p-4 ">
//                     <div className="flex flex-rows">

//                         <input
//                             type="text"
//                             placeholder="Type a message...."
//                             className="w-full rounded-full mr-4"
//                             value={question}
//                             onChange={(e) => setQuestion(e.target.value)}
//                         />
//                         <button
//                             className="bg-white text-blue-500 rounded-full p-4"

//                         >
//                             Submit
//                         </button>
//                 </div>

//             </div>
//             </form>

//         </>
//     );
// }

// export default Frontend;
// import React, { useState } from 'react';
// import axios from 'axios';

// function Frontend() {
//     const [question, setQuestion] = useState('');
//     const [answer, setAnswer] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await axios.post('http://127.0.0.1:5000/suresh', {
//                 question: question,
//             });

//             // Set the answer in state
//             setAnswer(response.data.answer);
//             // Clear the question input
//             setQuestion('');
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     return (
//         <div className="chat-container">
//             <div className="chat-header">
//                 <p className="chat-title">ChatGPT</p>
//             </div>
//             <div className="chat-messages">
//                 <div className="user-message">
//                     <p className="message-content">{question}</p>
//                 </div>
//                 {answer && (
//                     <div className="bot-message">
//                         <p className="message-content">{answer}</p>
//                     </div>
//                 )}
//             </div>
//             <form onSubmit={handleSubmit} className="chat-input-form">
//                 <input
//                     type="text"
//                     placeholder="Type a message...."
//                     className="message-input"
//                     value={question}
//                     onChange={(e) => setQuestion(e.target.value)}
//                 />
//                 <button type="submit" className="submit-button">
//                     Send
//                 </button>
//             </form>
//         </div>
//     );
// }

// export default Frontend;


import React, { useState } from 'react';
import axios from 'axios';

function Frontend() {
    const [question, setQuestion] = useState('');
    const [chatHistory, setChatHistory] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://127.0.0.1:5000/suresh', {
                question: question,
            });

            // Add user's question and bot's answer to the chat history
            const updatedChatHistory = [
                ...chatHistory,
                { sender: 'user', message: question },
                { sender: 'system', message: response.data.answer },
            ];

            // Set the chat history and clear the input field
            setChatHistory(updatedChatHistory);
            setQuestion('');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <div className="mt-4 mx-4">
                <p className="text-white italic font-bold text-xl">ChatGPT</p>
            </div>
            <div className="mt-6 ">
                {chatHistory.map((chat, index) => (
                    <div key={index} className={chat.sender === 'user' ? 'flex flex-col items-end' : 'flex flex-col items-start'}>
                        <p class="text-blue-300"> {chat.sender} </p>
                        <p className={chat.sender === 'user' ? 'text-white bg-blue-600 rounded-full p-2 mr-4' : 'text-blue-400 bg-white rounded-full p-2 mt-4 ml-2 mb-4'}>{chat.message}</p>
                    </div>
                ))}
            </div>
            <form onSubmit={handleSubmit}>
                <div className="fixed bottom-0 w-full p-4 ">
                    <div className="flex flex-rows">
                        <input
                            type="text"
                            placeholder="Type a message...."
                            className="w-full rounded-full mr-4"
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="bg-white text-blue-500 rounded-full p-4"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
}

export default Frontend;

