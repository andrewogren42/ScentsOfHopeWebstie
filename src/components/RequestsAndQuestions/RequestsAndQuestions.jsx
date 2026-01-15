import React, {useState} from "react";
import "./RequestsAndQuestions.css";
import { db } from "../../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

function RequestsAndQuestions(){

    const [message, setMessage] = useState({
        name: "",
        phone: "", 
        email: "",
        comments: ""
    })

    const updateMessage = (event) => {
        setMessage({ ...message, [event.target.id]: event.target.value});
    }

    const submitMessage = async (event) => {
        event.preventDefault();

        const form = event.target;
        
        if (!form.checkValidity()) {
            form.reportValidity();
            return; 
        }

        try {
            await addDoc(collection(db, "messages"), {
                ...message,
                timestamp: serverTimestamp()
            });
            alert("Message sent! Thank you for your input.");
            setMessage({ name: "", phone: "", email: "", comments: "" });
        } catch (error) {
            console.error("Error saving message:", error);
        }
    };

    return(
        <form id="requestsQuestionsContainer" onSubmit={submitMessage}>
            <h3>FOR SPECIAL REQUESTS & QUESTIONS</h3>
            <div id="requestsUpperBox" className="requestsTextBoxDiv">
                <div id="nameBox">
                    <label htmlFor="name">Name</label>
                    <input  className="requestsTextBoxDiv" 
                            id="name" 
                            type="text" 
                            placeholder="John Doe" 
                            maxLength="40" 
                            minLength="2" 
                            required
                            value={message.name}
                            onChange={updateMessage}/>
                </div>
                <div id="phoneBox">
                    <label htmlFor="phone">Phone Number</label>
                    <input  className="requestsTextBoxDiv" 
                            id="phone" 
                            type="tel" 
                            placeholder="507-XXX-XXXX" 
                            maxLength="12" 
                            minLength="7" 
                            required
                            value={message.phone}
                            onChange={updateMessage}/>
                </div>
            </div>
            <div id="emailBox" className="textBoxDiv">
                <label htmlFor="email">Email</label>
                <input  className="requestsTextBoxDiv" 
                        id="email" 
                        type="email" 
                        placeholder="@gmail.com" 
                        maxLength="40" 
                        min="5"
                        required
                        value={message.email}
                        onChange={updateMessage}/>
            </div>
            <div id="commentBox" className="textBoxDiv">
                <label htmlFor="comments">Comments</label>
                <input  className="requestsTextBoxDiv" 
                        id="comments" 
                        type="text" 
                        maxLength="600" 
                        required
                        value={message.comments}
                        onChange={updateMessage}/>
            </div>
            <button id="submitComment" type="submit">Submit</button>
        </form>
    )
}

export default RequestsAndQuestions