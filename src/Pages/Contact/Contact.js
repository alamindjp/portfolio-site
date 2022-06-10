import React, { useState } from 'react';
import linkedIn from '../../Assets/Icon/linkedin.svg'
import facebook from '../../Assets/Icon/facebook.svg'
import github from '../../Assets/Icon/github.svg'
import gmail from '../../Assets/Icon/gmail.svg'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

const Contact = () => {
    const [value, setValue] = useState()
    return (
        <>
            <h1 className="text-textSemi text-5xl font-bold mt-36">Contact Me</h1>
        <div id='contact' className="hero min-h-screen mt-50">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left lg:pr-32">
                    <h1 className="text-5xl font-bold text-bgSemi">Get In <span className='text-error'>Touch</span></h1>
                    <p className="py-6">Send me an email if you think I can help you out with any of your web related projects.</p>
                        <h1 className="text-5xl font-bold text-bgSemi">My Socials</h1>
                    <ul className='flex mt-10'>
                        <li className='px-2'><a href="https://github.com/alamindjp" target='_blank' rel="noReferrer"><img className='w-[50px] hover:animate-bounce' src={github} alt="" /></a></li>
                        <li className='px-2'><a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSMVxgSRldqFwkkttbMSnMPqwBMSsmZtscJpZMJHFNbrqZbsHkjjFbhBlgJTVCRmWWnBdlrR" target='_blank' rel="noReferrer"><img  className='w-[50px] hover:animate-bounce'src={gmail} alt="" /></a></li>
                        <li className='px-2'><a href="https://www.linkedin.com/in/alamindjp/" target='_blank' rel="noReferrer"><img className='w-[50px] hover:animate-bounce' src={linkedIn} alt="" /></a></li>
                        <li className='px-2'><a href="https://www.facebook.com/alamindjp/" target='_blank' rel="noReferrer"><img className='w-[50px] hover:animate-bounce' src={facebook} alt="" /></a></li>
                    </ul>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-bgSemi">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-textSemi">Name</span>
                            </label>
                            <input type="text" placeholder="Name" className="input input-bordered bg-base-200 text-black" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-textSemi">Phone</span>
                                </label>
                                <PhoneInput
                                    className="input input-bordered bg-base-200 text-black"
                                    placeholder="Enter phone number"
                                    defaultCountry="US"/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-textSemi">Email</span>
                            </label>
                            <input type="text" placeholder="Email" className="input input-bordered bg-base-200 text-black" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-textSemi">Comments</span>
                            </label>
                                <textarea class="textarea textarea-bordered" placeholder="Comments" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-success hover:btn-success btn-outline text-textSemi">Login</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
};

export default Contact;