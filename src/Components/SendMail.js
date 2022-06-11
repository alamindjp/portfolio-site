import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const SendMail = () => {
    const form = useRef();

        const sendEmail = (e) => {
            e.preventDefault();

            emailjs.sendForm('service_w9hjy1j', 'template_hrjpwvi', form.current, '_QyVU6DWAeKO34Y0z')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
        };
        return (
                <form className='w-[300px] mx-auto flex flex-col' ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="user_name" />
                    <label>Email</label>
                    <input type="email" name="user_email" />
                    <label>Message</label>
                    <textarea name="message" />
                    <input className='btn btn-secondary mt-3' type="submit" value="Send" />
                </form>
        );
    };

    export default SendMail;