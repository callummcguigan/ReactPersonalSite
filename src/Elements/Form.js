import { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import { useNavigate } from 'react-router-dom';

function Form() {

    let navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        
        const contact = { name, email, message }
        console.log(contact)

        e.preventDefault();

        emailjs.sendForm('service_v6roc8j', 'template_nnhx78y', e.target, 'user_7R9pav1gNbaQcQhe4uF6J')
            .then((result) => {
                console.log(result.text);
                const confirm = document.getElementById("confimation")
                confirm.classList.remove("hidden");
                confirm.classList.add("show");

                //navigate("/");
            }, (error) => {
                console.log(error.text);
            });    
    }


    return (
        <div>
            <div className="contactForm" id="formLoad">
                <h3>Contact Me!</h3>
                <p>Send me an email and I will get back to you as soon as I can</p>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="col-3">
                    <input
                        type="text"
                        name="name"
                        className="effect-9"
                        placeholder='Name..'
                        required
                        autoComplete='off'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    ></input>
                    <span class="focus-border">
                    <i></i>
                    </span>
                    </div>

                    <div className="col-3">
                    <input
                        type="email"
                        name="email"
                        className="effect-9"
                        placeholder='Email..'
                        autoComplete='off'
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    ></input>
                    <span class="focus-border">
                    <i></i>
                    </span>
                    </div>

                    <div className="col-3 messageArea">
                    <textarea
                        name="message"
                        className="effect-9 messageArea"
                        placeholder='Message..'
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                    <span class="focus-border">
                    <i></i>
                    </span>
                    </div><button class="button">Send Message!</button>
                </form>
                <p className="hidden" id="confimation">Email Sent!</p>
            </div>
        </div>
    );
}

export default Form;