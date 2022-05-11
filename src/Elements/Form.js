import { useState } from 'react';
import emailjs from 'emailjs-com';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap';

function Form() {

    let navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [show, setShow] = useState(false);

    const handleClose = () => {
        navigate("/");
        setShow(false);
    }
    const handleShow = () => setShow(true);

    const handleSubmit = (e) => {

        const contact = { name, email, message }
        console.log(contact)

        e.preventDefault();

        emailjs.sendForm('service_v6roc8j', 'template_nnhx78y', e.target, 'user_7R9pav1gNbaQcQhe4uF6J')
            .then((result) => {
                handleShow(true)
                
            }, (error) => {
                console.log(error.text);
            });
    }


    return (
        <div>
            <div className="contactForm" id="formLoad">
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
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Email Sent</Modal.Title>
                </Modal.Header>
                <Modal.Body><span className='modalText'>Thanks for sending me an email, I will respond as soon as I can!</span></Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Woohoo!
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Form;