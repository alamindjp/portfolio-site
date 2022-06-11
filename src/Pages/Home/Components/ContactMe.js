import React, { useRef, useState } from 'react';
import linkedIn from '../../../Assets/Icon/linkedin.svg'
import facebook from '../../../Assets/Icon/facebook.svg'
import github from '../../../Assets/Icon/github.svg'
import gmail from '../../../Assets/Icon/gmail.svg'
import email from '../../../Assets/Icon/email.png'
import phone from '../../../Assets/Icon/phone.png'
import location from '../../../Assets/Icon/location.png'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import emailjs from '@emailjs/browser';

const ContactMe = () => {
    const [value, setValue] = useState();
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
        <>
            <h1 className="text-textSemi text-5xl font-bold mt-36">Contact Me</h1>
            <div id='contact' className="hero min-h-screen mt-50">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left lg:pr-32">
                        <div>
                            <h3 className="text-4xl font-bold text-info mt-10">Contact <span className='text-success'>Info</span></h3>
                            <div className='mt-5'>
                                <p className='flex items-center'><img className='w-[45px] pr-3' src={email} alt="" /> <span className='text-xl'>alaminhossaindjp@gmail.com</span></p>
                                <p className='flex items-center'><img className='w-[40px] my-3 pr-3' src={phone} alt="" /> <span className='text-xl'>(+880) 1785740163</span></p>
                                <p className='flex items-center'><img className='w-[40px] pr-3' src={location} alt="" /> <span className='text-xl'>Kushtia, Bangladesh</span></p>
                            </div>
                        </div>
                    </div>
                    <form ref={form} onSubmit={sendEmail} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-bgSemi">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-textSemi">Name</span>
                                </label>
                                <input type="text" name="user_name" placeholder="Name" className="input input-bordered bg-base-200 text-black" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-textSemi">Email</span>
                                </label>
                                <input type="email" name="user_email" placeholder="Email" className="input input-bordered bg-base-200 text-black" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-textSemi">Email</span>
                                </label>
                                <PhoneInput
                                    className="input input-bordered bg-base-200 text-black"
                                    name="user_phone"
                                    placeholder="Enter phone number"
                                    value={value}
                                    defaultCountry="BD"
                                    onChange={setValue} required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-textSemi">Comments</span>
                                </label>
                                <textarea name="message" className="textarea textarea-bordered" placeholder="Comments" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-success hover:btn-success btn-outline text-textSemi">Login</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className='flex items-center mt-10'>
                <div className='h-[5px] w-1/2 bg-slate-400 rounded-lg'></div>
                <div className='px-3'>OR</div>
                <div className='h-[5px] w-1/2 bg-slate-400 rounded-lg'></div>
            </div>
            <h3 className="text-4xl font-bold text-success mt-7 underline">Get In <span className='text-info'>Touch</span></h3>
            <ul className='flex justify-center my-10'>
                <li className='px-2'><a href="https://github.com/alamindjp" target='_blank' rel="noReferrer"><img className='w-[50px] hover:animate-bounce' src={github} alt="" /></a></li>
                <li className='px-2'><a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSMVxgSRldqFwkkttbMSnMPqwBMSsmZtscJpZMJHFNbrqZbsHkjjFbhBlgJTVCRmWWnBdlrR" target='_blank' rel="noReferrer"><img className='w-[50px] hover:animate-bounce' src={gmail} alt="" /></a></li>
                <li className='px-2'><a href="https://www.linkedin.com/in/alamindjp/" target='_blank' rel="noReferrer"><img className='w-[50px] hover:animate-bounce' src={linkedIn} alt="" /></a></li>
                <li className='px-2'><a href="https://www.facebook.com/alamindjp/" target='_blank' rel="noReferrer"><img className='w-[50px] hover:animate-bounce' src={facebook} alt="" /></a></li>
            </ul>
        </>
    );
};

export default ContactMe;