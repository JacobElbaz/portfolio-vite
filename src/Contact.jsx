import { Container } from "react-bootstrap";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import ChatBot from "./ChatBot";
import toast, { Toaster } from "react-hot-toast";

function Contact() {
    const form = useRef();
    const nameRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();
    const [loading, setLoading] = React.useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        emailjs.sendForm('service_0b8ior8', 'template_n2h7xy6', form.current, 'mEYfRDD7YhHd42iLG')
            .then((result) => {
                nameRef.current.value = null;
                emailRef.current.value = null;
                messageRef.current.value = null;
                setLoading(false);
                toast.success("Message Sent , I will get back to you shortly!");
            }, (error) => {
                toast.error("An error occurred, Please try again later.");
                setLoading(false);
            });
    };

    return (
        <div className="Contact">
            <Container>
                <ChatBot />
                <div style={{paddingTop: '100px'}} id="contact">
                    <h1>Contact me</h1>
                </div>
                <div className="details">
                    <div className="contact-card">
                        <ion-icon name="logo-whatsapp"></ion-icon>
                        Whatsapp
                        <a href="https://wa.me/972503013489" target={'_blank'}>050-301-3489</a>
                    </div>
                    <div className="contact-card">
                        <ion-icon name="mail-outline"></ion-icon>
                        Email
                        <a href="mailto:jacobelbz@gmail.com?subject=Mail from portfolio website" target={'_blank'}>jacobelbz@gmail.com</a>
                    </div>
                </div>
                <form ref={form} onSubmit={sendEmail} className="form">
                    <input ref={nameRef} type="text" className="contact" name="from_name" placeholder="Your name*" required />
                    <input ref={emailRef} type="email" className="contact" name="from_email" placeholder="Your email*" required />
                    <textarea ref={messageRef} name="message" id="message" placeholder="Write your message" required />
                    <input type="submit" value={loading ? 'sending...' : 'send'} className="btn-grad" disabled={loading}/>
                </form>
            </Container>
            <Toaster/>
        </div>
    )
}

export default Contact;