import React from 'react';
import linkedIn from '../../Assets/Icon/linkedin.svg'
import facebook from '../../Assets/Icon/facebook.svg'
import github from '../../Assets/Icon/github.svg'
import gmail from '../../Assets/Icon/gmail.svg'

const Contact = () => {
    return (
        <div className="hero min-h-screen mt-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left lg:pr-32">
                    <h1 className="text-5xl font-bold text-primary">Get In <span className='text-secondary'>Touch</span></h1>
                    <p className="py-6">Send me an email if you think I can help you out with any of your web related projects.</p>
                    <h1 className="text-5xl font-bold text-primary">My Socials</h1>
                    <ul className='flex gap-5 mt-10'>
                        <li><a href="https://github.com/alamindjp" target='_blank' rel="noReferrer"><img src={github} alt="" /></a></li>
                        <li><a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSMVxgSRldqFwkkttbMSnMPqwBMSsmZtscJpZMJHFNbrqZbsHkjjFbhBlgJTVCRmWWnBdlrR" target='_blank' rel="noReferrer"><img src={gmail} alt="" /></a></li>
                        <li><a href="https://www.linkedin.com/in/alamindjp/" target='_blank' rel="noReferrer"><img src={linkedIn} alt="" /></a></li>
                        <li><a href="https://www.facebook.com/alamindjp/" target='_blank' rel="noReferrer"><img src={facebook} alt="" /></a></li>
                    </ul>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input type="text" placeholder="Phone" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;